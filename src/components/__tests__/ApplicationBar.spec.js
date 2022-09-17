import { describe, it, expect, beforeEach } from "vitest";

import { shallowMount } from "@vue/test-utils";
import ApplicationBar from "../core/ApplicationBar.vue";

describe("ApplicationBar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ApplicationBar);
  });

  it("renders properly", () => {
    expect(wrapper.text()).toBeTruthy("Application Bar");
  });
});
