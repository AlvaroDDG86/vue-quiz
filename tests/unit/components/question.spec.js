import { shallowMount } from "@vue/test-utils";
import Question from "@/components/Question";

describe("Question", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Question, {
      propsData: {
        question: {
          id: 1,
          title: "Question prueba",
          options: [{ id: 1, title: "Option 1" }],
        },
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
  test("should display the title", () => {
    expect(wrapper.find(".question__title").text()).toBe("Question prueba");
  });
  test("should display the options", () => {
    expect(wrapper.find(".question__option").exists()).toBe(true);
  });
  test("should select an option and emit check-answer with selected value", () => {
    wrapper.find(".question__option").trigger("click");
    expect(wrapper.vm.selected.title).toBe("Option 1");
    wrapper.find("app-button-stub").trigger("click");
    expect(wrapper.emitted("check-answer").length).toBe(1);
    console.log(wrapper.emitted("check-answer"));
    expect(wrapper.emitted("check-answer")[0][0]).toEqual({
      id: 1,
      title: "Option 1",
    });
  });
});
