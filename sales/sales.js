let sourceData = [
  {
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
  },
  {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
  },
  {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
  },
  {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
  },
  {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
  },
  {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
  },
  {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
  },
  {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
  },
  {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
  }
];

//表头渲染 +一个空的tbody
function headRender(epTable) {
  let head = $("<thead></thead>");
  let tbody = $("<tbody></tbody>");
  epTable.append(head);
  epTable.append(tbody);
  let html = "<tr><th>商品</th><th>地区</th>";
  for (let i = 0; i < 12; i++) {
    html += `<th>${i + 1}月</th>`;
  }
  html += "</tr>";
  head.html(html);
}
headRender($(".table1"));
headRender($(".table2"));

//选择并渲染
let region, goods;
$("#region-select").change(function() {
  region = $(this).val();
  goods = $("#goods-select").val();
  render(region);
});
$("#goods-select").change(function() {
  region = $("#region-select").val();
  goods = $(this).val();
  //   console.log(region, goods);
  render(region, goods);
});

//数据渲染  tbody
function render(region, goods) {
  //   console.log(region, goods);
  //   console.log(arguments.length);
  if (arguments.length == 1) {
    let tbody1 = $(".table1 tbody");
    //   $("table").append(tbody);
    let html = "";
    for (let i = 0; i < sourceData.length; i++) {
      if (sourceData[i].region == region) {
        html += `<tr><td>${sourceData[i].product}</td><td>${sourceData[i].region}</td>`;
        for (let j = 0; j < sourceData[i].sale.length; j++) {
          html += `<td>${sourceData[i].sale[j]}</td>`;
        }
        html += `</tr>`;
        tbody1.html(html);
      }
    }
  } else {
    let tbody2 = $(".table2 tbody");
    let html = "";
    for (let i = 0; i < sourceData.length; i++) {
      if (sourceData[i].region == region && sourceData[i].product == goods) {
        html += `<tr><td>${sourceData[i].product}</td><td>${sourceData[i].region}</td>`;
        for (let j = 0; j < sourceData[i].sale.length; j++) {
          html += `<td>${sourceData[i].sale[j]}</td>`;
        }
        html += `</tr>`;
        tbody2.html(html);
      }
    }
    tbody2.html(html);
  }
}

//单行tr字符串拼接
function concat(html, i) {
  html = "";
  html += `<tr><td>${sourceData[i].product}</td><td>${sourceData[i].region}</td>`;
  for (let j = 0; j < sourceData[i].sale.length; j++) {
    html += `<td>${sourceData[i].sale[j]}</td>`;
  }
  html += `</tr>`;
}
