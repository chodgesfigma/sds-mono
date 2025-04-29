import { Components } from '../../../components';
import { spread } from '../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsDialogButton;

const meta = {
  title: 'SDS primitives/Dialog',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-dialog-button',
  render: args => `
  <sds-dialog-button id="modal-button" ${spread(args)}>
    <sds-icon-menu slot="icon"></sds-icon-menu>
    <sds-dialog-close></sds-dialog-close>
    <sds-dialog-title>Open Dialog</sds-dialog-title>
    <sds-dialog-description>
      The refund will be reflected in the customer’s bank account 2 to 3
      business days after processing.
    </sds-dialog-description>
    <sds-dialog-body>
      <sds-input-field label="Amount" name="amount" placeholder="$0.00"></sds-input-field>
    </sds-dialog-body>
    <sds-button-group>
      <sds-button id="refund">Refund</sds-button>
      <sds-button variant="subtle" id="cancel">
        Cancel
      </sds-button>
    </sds-button-group>
  </sds-dialog-button>


  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const modalController = document.querySelector('#modal-button');
      document.querySelector('#refund')?.addEventListener('click', () => {
        modalController.closeDialog();
      });
      document.querySelector('#cancel')?.addEventListener('click', () => {
        modalController.closeDialog();
      });
    }, { once: true });
  </script>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Dialog: Story = {
  args: {
    label: 'Open Dialog',
    variant: 'primary',
    useIcon: true,
  },
};

export const DialogControlled: Story = {
  args: {},
  render: () => `
    <sds-button id="open-button">Open Dialog</sds-button>
    <sds-dialog-modal
      is-dismissible
      id="modal"
    >
      <sds-dialog>
        <sds-dialog-title>Open Dialog</sds-dialog-title>
        <sds-dialog-description>
          The refund will be reflected in the customer's bank account 2 to 3
          business days after processing.
        </sds-dialog-description>
        <sds-dialog-body>
          <sds-input-field label="Amount" name="amount" placeholder="$0.00"></sds-input-field>
        </sds-dialog-body>
        <sds-button-group>
          <sds-button id="refund">Refund</sds-button>
          <sds-button id="cancel" variant="subtle">
            Cancel
          </sds-button>
        </sds-button-group>
      </sds-dialog>
    </sds-dialog-modal>


    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const modal = document.querySelector('#modal');
        document.querySelector('#open-button')?.addEventListener('click', () => {
          modal.isOpen = true;
        });
  
        const closeModal = () => {
          modal.isOpen = false;
        }
  
        document.querySelector('#refund')?.addEventListener('click', () => {
          closeModal();
        });
        document.querySelector('#cancel')?.addEventListener('click', () => {
          closeModal();
        });
      }, { once: true });
    </script>
  `,
};

export const DialogBodyBleed: Story = {
  render: () => `
    <sds-button id="open-button">Open Dialog</sds-button>
    <sds-dialog-modal
      is-dismissible
      id="modal"
    >
      <sds-dialog>
        <sds-dialog-title>Open Dialog</sds-dialog-title>
        <sds-dialog-description>
          The refund will be reflected in the customer's bank account 2 to 3
          business days after processing.
        </sds-dialog-description>
        <sds-dialog-body bleed={true}>
          <!-- TODO: update this with sds-table when implemented -->
          <table bleed={true}>
            <thead>
              <tr>
                <th isRowHeader>Name</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jake</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Kale</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </sds-dialog-body>
        <sds-button-group>
          <sds-button id="refund">Refund</sds-button>
          <sds-button id="cancel" variant="subtle">
            Cancel
          </sds-button>
        </sds-button-group>
      </sds-dialog>
    </sds-dialog-modal>

    <!-- Partial placeholder styles while sds-table is not implemented -->
    <style>
      table {
        --table-cell-border-right-thickness: 0;
        --table-cell-padding-x: var(--sds-size-space-200);
        --table-cell-padding-y: var(--sds-size-space-400);
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }
      td,
      th {
        border-left-width: 0;
        border-bottom: var(--sds-size-stroke-border) solid
          var(--sds-color-border-default-default);
        padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
        text-align: var(--cell-text-align);

        &:first-child {
          padding-left: var(--table-gutter-inset, var(--table-cell-padding-x));
        }

        &:last-child {
          padding-right: var(--table-gutter-inset, var(--table-cell-padding-x));
        }

        .table-striped .table-row > &:not(.table-column) {
          border-bottom-width: 0;
        }

        &:not(:last-child) {
          border-right: var(--table-cell-border-right-thickness) solid
            var(--sds-color-border-default-default);
        }
      }
    </style>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const modal = document.querySelector('#modal');
        document.querySelector('#open-button')?.addEventListener('click', () => {
          modal.isOpen = true;
        });
  
        const closeModal = () => {
          modal.isOpen = false;
        }
  
        document.querySelector('#refund')?.addEventListener('click', () => {
          closeModal();
        });
        document.querySelector('#cancel')?.addEventListener('click', () => {
          closeModal();
        });
      }, { once: true });
    </script>
  `,
};
