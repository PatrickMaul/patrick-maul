import { describe, it, expect, beforeEach } from "vitest";

import { shallowMount } from "@vue/test-utils";
import ApplicationBar from "@/components/ApplicationBar.vue";

describe("ApplicationBar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ApplicationBar, {
      global: {
        stubs: {
          "router-link": true,
          MobileMenuButton: true,
        },
      },
    });
  });

  it("Should always contain the brand name", () => {
    expect(wrapper.find("#brand-name").text()).toBe("Patrick Maul");
  });

  it("Should renders with MobileMenuButton on mobile", () => {
    expect(wrapper.vm.onMobile).toBeFalsy();

    delete window.innerWidth;
    window.innerWidth = 499;
    wrapper.vm.setOnMobile();

    expect(wrapper.vm.onMobile).toBeTruthy();
  });
});
