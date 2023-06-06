import About from "@/views/About.vue";
import { shallowMount } from "@vue/test-utils";
describe("About.vue", () => {
    test("renders inner text", () => {
        const wrapper = shallowMount(About); //limit how many children components it loads, only one level
        expect(wrapper.text()).toContain('SoundScape');
    })
});