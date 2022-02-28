import { shallowMount } from "@vue/test-utils";
import AppSelect from "@/components/AppSelect";

describe("Question", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppSelect, {
      propsData: {
        options: [{ id: 1, description: "Option 1" }],
        placeholder: "placeholder test",
      },
    });
  });
  test("Should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should display the placeholder", () => {
    expect(wrapper.find(".app-select__selected").text()).toBe(
      "placeholder test"
    );
  });
  test("should display the options", () => {
    wrapper.find(".app-select__selected").trigger("click");
    expect(wrapper.find(".app-select__item").exists()).toBe(true);
  });
  test("should select an option and emit selected value", () => {
    wrapper.find(".app-select__selected").trigger("click");
    wrapper.find(".app-select__item").trigger("click");
    expect(wrapper.emitted("input").length).toBe(1);
    expect(wrapper.emitted("input")[0][0]).toEqual({
      id: 1,
      description: "Option 1",
    });
  });
});
