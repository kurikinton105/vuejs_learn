var app = new Vue({
  el: '#app',
  data: {
  	todoLists: [
    	{title: "会議資料を作成する", checkToggle: false},
      {title: "取引先にメールを返信する", checkToggle: false},
      {title: "見積書を作成する", checkToggle: false}
    ]
  }
})