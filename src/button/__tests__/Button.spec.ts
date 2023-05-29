import Button from "../index";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });
  test("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});

describe("plain", () => {
  test("plain default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        plain: true,
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-100")
    ).toBe(true);
  });
  test("plain red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
        plain: true,
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-100")
    ).toBe(true);
  });
});
