import { shallowMount } from "@vue/test-utils";
import AppStepper from "@/components/AppStepper";

describe("AppStepper", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppStepper, {
      propsData: {
        steps: 4,
        current: 1,
      },
      global: {
        stubs: {
          fa: true,
          AppButton: true,
        },
      },
    });
  });
  test("Should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should display the steps", () => {
    expect(wrapper.find(".app-stepper__step").exists()).toBe(true);
  });
  test("should disabled prev when step is 1", async () => {
    const directions = wrapper.findAll("app-button-stub");
    const prev = directions.at(0);
    expect(prev.attributes().disabled).toBeTruthy();
    await wrapper.setProps({ current: 4 });
    const next = directions.at(1);
    expect(next.attributes().disabled).toBeTruthy();
  });
  test("should prev and next", () => {
    const directions = wrapper.findAll("app-button-stub");
    directions.at(0).trigger("click");
    directions.at(1).trigger("click");
    expect(wrapper.emitted("prev").length).toBe(1);
    expect(wrapper.emitted("next").length).toBe(1);
  });
});
