import { describe, it, expect, beforeEach } from "vitest";

import { shallowMount } from "@vue/test-utils";
import App from "../App.vue";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App, {
      global: {
        stubs: {
          "router-view": true,
        },
      },
    });
  });

  it("renders properly", () => {
    expect(wrapper.find("router-view-stub").exists()).toBeTruthy();
  });
});