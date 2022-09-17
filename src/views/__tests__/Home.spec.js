import { describe, it, expect, beforeEach } from "vitest";

import { shallowMount } from "@vue/test-utils";
import Home from "../Home.vue";

describe("Home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      global: {
        stubs: {
          "router-view": true,
        },
      },
    });
  });

  it("renders properly", () => {
    expect(wrapper.text()).toBe("HOME");
  });
});
