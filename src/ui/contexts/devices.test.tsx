import { renderHook } from "@testing-library/react";
import _ from "lodash";
import {
	describe,
	expect,
	it,
} from "vitest";

import { AppsProvider } from "./apps";
import { DevicesProvider, useDevices } from "./devices";

const renderDevicesHook = () => renderHook(() => useDevices(), {
	wrapper: ({ children }) => (
		<AppsProvider>
			<DevicesProvider>
				{children}
			</DevicesProvider>
		</AppsProvider>
	),
});

describe("Devices", () => {
	it("is a non-empty list.", () => {
		const { result } = renderDevicesHook();
		const deviceList = result.current.devices;
		expect(deviceList).toBeDefined();
		expect(deviceList).not.toHaveLength(0);
	});
});

describe("Each device", () => {
	describe("ID", () => {
		it("is non-empty.", () => {
			const { result } = renderDevicesHook();
			const deviceList = result.current.devices || [];
			for (const device of deviceList) {
				const errorMsg = `Invalid (i.e. empty) ID for '${JSON.stringify(device)}'`;
				expect.soft(device.id, errorMsg).toBeTypeOf("string");
				expect.soft(device.id, errorMsg).not.toBe("");
			}
		});

		it("is URL-safe.", () => {
			const { result } = renderDevicesHook();
			const deviceList = result.current.devices || [];
			for (const device of deviceList) {
				const errorMsg = `Invalid (i.e. non-URL-safe) ID for '${JSON.stringify(device)}'`;
				expect.soft(device.id, errorMsg).toEqual(encodeURIComponent(device.id));
			}
		});

		it("is unique.", () => {
			const { result } = renderDevicesHook();
			const deviceList = result.current.devices || [];
			const deviceIDList = deviceList.map((dev) => dev.id);
			const duplicatedDeviceIDList = _(deviceIDList).groupBy().pickBy(id => id.length > 1).keys().value();
			expect(duplicatedDeviceIDList, "Found duplicate IDs").toHaveLength(0);
		});
	});

	describe("name", () => {
		it("is non-empty.", () => {
			const { result } = renderDevicesHook();
			const deviceList = result.current.devices || [];
			for (const device of deviceList) {
				const errorMsg = `Invalid (i.e. empty) name for '${JSON.stringify(device)}'`;
				expect.soft(device.name, errorMsg).toBeTypeOf("string");
				expect.soft(device.name, errorMsg).not.toBe("");
			}
		});
	});

	describe("app list", () => {
		it("is non-empty.", () => {
			const { result } = renderDevicesHook();
			const deviceList = result.current.devices || [];
			for (const device of deviceList) {
				const errorMsg = `Invalid (i.e. empty) apps for device '${device.name}'`;
				expect.soft(device.apps, errorMsg).not.toHaveLength(0);
			}
		});

		it("does not have duplicates.", () => {
			const { result } = renderDevicesHook();
			const deviceList = result.current.devices || [];
			for (const device of deviceList) {
				const appIDList = device.apps.map((da) => da.app.id);
				const duplicatedAppIDList = _(appIDList).groupBy().pickBy(id => id.length > 1).keys().value();
				const errorMsg = `Found duplicate apps for device '${device.name}'`;
				expect.soft(duplicatedAppIDList, errorMsg).toHaveLength(0);
			}
		});
	});
});
