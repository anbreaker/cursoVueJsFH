import { dayBookRouter } from '@/modules/daybook/router';

describe('Index router', () => {
  test('router config', async () => {
    expect(dayBookRouter).toMatchObject({
      name: 'daybook',
      component: expect.any(Function),
      children: [
        {
          path: '',
          name: 'no-entry',
          component: expect.any(Function),
        },
        {
          path: ':id',
          name: 'entry',
          component: expect.any(Function),
          props: expect.any(Function),
        },
      ],
    });

    // expect((await dayBookRouter.children[0].component()).default.name).toBe(
    // 'NoEntrySelected'
    // );
    // expect((await dayBookRouter.children[1].component()).default.name).toBe('EntryView');

    const promiseRoutes = [];
    dayBookRouter.children.forEach((child) => {
      promiseRoutes.push(child.component());
    });

    const routes = await (
      await Promise.all(promiseRoutes)
    ).map((route) => route.default.name);

    expect(routes).toContain('EntryView');
    expect(routes).toContain('NoEntrySelected');
  });

  test('must return the route id', () => {
    const route = {
      params: {
        id: '123',
      },
    };

    // Static
    // expect(dayBookRouter.children[1].props(route)).toEqual({ id: '123' });

    // Dynamic
    const entryRoute = dayBookRouter.children.find((route) => route.name === 'entry');

    expect(entryRoute.props(route)).toEqual({ id: '123' });
  });
});
