import { CrownButton } from './../button';
import { newSpecPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CrownButton],
      html: '<crown-button></crown-button>',
    });
    expect(root).toEqualHtml(`
      <crown-button>
        <mock:shadow-root>
          <button class="bg-primary/100 disabled:bg-sys/light/disabled/[.12] disabled:cursor-not-allowed disabled:text-sys/light/disabled/[.38] filled flex font-medium gap-2 items-center justify-center leading-[160%] px-7 py-2.5 relative rounded-[0.25rem] text-sm text-white transition-all w-full w-max" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </crown-button>
    `);
  });
});
