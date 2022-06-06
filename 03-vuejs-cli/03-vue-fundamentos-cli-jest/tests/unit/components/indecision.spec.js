import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision';
describe('Indecision Component', () => {
  let wrapper;
  let consoleSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: 'yes',
          forced: false,
          image: 'https://yesno.wtf/assets/yes/2.gif',
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);

    consoleSpy = jest.spyOn(console, 'log');

    jest.clearAllMocks();
  });

  test('Should match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Write in the input should not execute anything (console.log)', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

    const input = wrapper.find('input');

    await input.setValue('Hello');

    expect(consoleSpy).toHaveBeenCalledTimes(1);

    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test('typing "?" should fire the getAnswer', async () => {
    try {
      const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

      const input = wrapper.find('input');

      await input.setValue('Hello?');

      expect(consoleSpy).toHaveBeenCalledTimes(2);

      expect(getAnswerSpy).toHaveBeenCalled();
    } catch (error) {
      console.log(error);
    }
  });

  test('testing in getAnswer', async () => {
    await wrapper.vm.getAnswer();

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif');
    expect(wrapper.vm.answer).toBe('yes');
  });

  test('tests on getAnswer with API failure', async () => {
    // TODO Failure API
    fetch.mockImplementationOnce(() => Promise.reject('API is Down'));

    await wrapper.vm.getAnswer();

    const img = wrapper.find('img');

    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe('404 Not found API');
  });
});
