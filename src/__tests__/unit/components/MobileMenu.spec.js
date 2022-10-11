import { describe, it, expect, beforeEach } from "vitest";

import { shallowMount } from "@vue/test-utils";
import MobileMenu from "@/components/mobile/MobileMenu.vue";

describe("MobileMenu", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MobileMenu, {
      global: {
        stubs: {
          "router-link": true,
        },
      },
      props: {
        show: true,
        navLinks: [
          {
            label: "Home",
            to: "/",
          },
        ],
      },
    });
  });

  it("Should always contain the brand name", async () => {
    expect(wrapper.vm.activeClass).toBe("active");
    await wrapper.setProps({ show: false });
    expect(wrapper.vm.activeClass).toBe("");
  });
});
