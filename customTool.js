unlayer.registerTool({
    name: 'product_tool',
    label: 'Product Tool',
    icon: 'fa-box',  // FontAwesome icon
    supportedDisplayModes: ['email', 'web'],
    options: {
      default: {
        label: 'Product Title',
        defaultValue: 'Product Name',
        widget: 'text',
      },
      image: {
        label: 'Product Image',
        defaultValue: 'https://via.placeholder.com/150',
        widget: 'image',
      },
      price: {
        label: 'Price',
        defaultValue: '$0.00',
        widget: 'text',
      },
      description: {
        label: 'Description',
        defaultValue: 'Product description goes here...',
        widget: 'text',
      },
      buy_button_text: {
        label: 'Buy Button Text',
        defaultValue: 'Buy Now',
        widget: 'text',
      },
      products_per_row: {
        label: 'Products per Row',
        defaultValue: 3,
        widget: 'number',
      },
      total_rows: {
        label: 'Total Rows',
        defaultValue: 1,
        widget: 'number',
      }
    },
    values: {},
    renderer: {
       // eslint-disable-next-line no-undef
      Viewer: unlayer.createViewer({
        render: function(block) {
          const productsPerRow = block.values.products_per_row;
          const totalRows = block.values.total_rows;
          let productsHtml = '';

          for (let row = 0; row < totalRows; row++) {
            productsHtml += '<div style="display: flex; flex-wrap: wrap;">';
            for (let col = 0; col < productsPerRow; col++) {
              productsHtml += `
                <div style="flex: 1 0 ${100 / productsPerRow}%; padding: 10px; box-sizing: border-box;">
                  <img src="${block.values.image}" alt="${block.values.default}" style="width: 100%;">
                  <h3>${block.values.default}</h3>
                  <p>${block.values.price}</p>
                  <p>${block.values.description}</p>
                  <button>${block.values.buy_button_text}</button>
                </div>
              `;
            }
            productsHtml += '</div>';
          }

          return `<div>${productsHtml}</div>`;
        }
      }),
      exporters: {
        web: function(block) {
          const productsPerRow = block.values.products_per_row;
          const totalRows = block.values.total_rows;
          let productsHtml = '';

          for (let row = 0; row < totalRows; row++) {
            productsHtml += '<div style="display: flex; flex-wrap: wrap;">';
            for (let col = 0; col < productsPerRow; col++) {
              productsHtml += `
                <div style="flex: 1 0 ${100 / productsPerRow}%; padding: 10px; box-sizing: border-box;">
                  <img src="${block.values.image}" alt="${block.values.default}" style="width: 100%;">
                  <h3>${block.values.default}</h3>
                  <p>${block.values.price}</p>
                  <p>${block.values.description}</p>
                  <button>${block.values.buy_button_text}</button>
                </div>
              `;
            }
            productsHtml += '</div>';
          }

          return `<div>${productsHtml}</div>`;
        },
        email: function(block) {
          const productsPerRow = block.values.products_per_row;
          const totalRows = block.values.total_rows;
          let productsHtml = '';

          for (let row = 0; row < totalRows; row++) {
            productsHtml += '<div style="display: flex; flex-wrap: wrap;">';
            for (let col = 0; col < productsPerRow; col++) {
              productsHtml += `
                <div style="flex: 1 0 ${100 / productsPerRow}%; padding: 10px; box-sizing: border-box;">
                  <img src="${block.values.image}" alt="${block.values.default}" style="width: 100%;">
                  <h3>${block.values.default}</h3>
                  <p>${block.values.price}</p>
                  <p>${block.values.description}</p>
                  <button>${block.values.buy_button_text}</button>
                </div>
              `;
            }
            productsHtml += '</div>';
          }

          return `<div>${productsHtml}</div>`;
        }
      },
      head: {
        css: function(block) {block},
        js: function(block) {block}
      }
    }
  });
