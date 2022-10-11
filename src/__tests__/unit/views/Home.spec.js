import { describe, it, expect, beforeEach } from "vitest";

import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home);
  });

  it("Should render ...", () => {
    wrapper.html(); // Delete this row
    expect(true).toBeTruthy();
  });
});
