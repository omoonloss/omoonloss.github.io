<template>

<div id="app mdui-container">
  <!-- Weather card -->
 <!--  <div class="weather_card mdui-color-blue" v-bind:class="{weather_card_active: hasWeather}">

    <div class="weather_console">
      <div class="city_edit" mdui-dialog="{target: '#cities'}" v-on:click="toggleWeather">
  			<span class="now_city_edit"></span>
        <i class="mdui-icon material-icons" style="font-size: 16px">edit</i>
      </div>
    </div>

    <ul class="weather_more">
      <li id="weather_more_today" class="weather_list" v-bind:class="{weather_list_active: hasWeather}">
        <p class="weather_list-date"></p>
        <span class="weather_list-weather"></span>
        <span class="weather_list-temp"></span>
      </li>
      <li class="weather_list" v-bind:class="{weather_list_active: hasWeather}">
        <p class="weather_list-date"></p>
        <p class="weather_list-weather"></p>
        <p class="weather_list-temp"></p>
      </li>
      <li class="weather_list" v-bind:class="{weather_list_active: hasWeather}">
        <p class="weather_list-date"></p>
        <p class="weather_list-weather"></p>
        <p class="weather_list-temp"></p>
      </li>
      <li class="weather_list" v-bind:class="{weather_list_active: hasWeather}">
        <p class="weather_list-date"></p>
        <p class="weather_list-weather"></p>
        <p class="weather_list-temp"></p>
      </li>
      <li class="weather_list" v-bind:class="{weather_list_active: hasWeather}">
        <p class="weather_list-date"></p>
        <p class="weather_list-weather"></p>
        <p class="weather_list-temp"></p>
      </li>
    </ul>
  </div> -->

<!--   <div class="mdui-dialog" id="cities">
    <div class="mdui-dialog-title">选择城市</div>
    <div class="mdui-dialog-content">
      <select class="province"></select>
      <select class="city" disabled="disabled"></select>
      <select class="area" disabled="disabled"></select><br /><br />
      (设置城市后请刷新)
    </div>
    <div class="mdui-dialog-actions">
      <button class="mdui-btn mdui-ripple" mdui-dialog-cancel>取消</button>
      <button class="setCity mdui-btn mdui-ripple" mdui-dialog-confirm>确定</button>
    </div>
  </div> -->

	<!-- Header -->
	<div class="header mdui-color-blue mdui-col-xs-12 mdui-toolbar">
		<div>oSoga</div>
		<div class="mdui-toolbar-spacer"></div>
		<!-- <div class="weather_entry" v-on:click="toggleWeather">
			<p class="now_city"></p>
			<span class="now_temp"></span>
		</div> -->
<!--     <i class="mdui-icon material-icons weather_more_icon" v-bind:class="{iconHidden: hasWeather}">keyboard_arrow_down</i>
    <i class="mdui-icon material-icons weather_more_icon" v-bind:class="{iconHidden: !hasWeather}">keyboard_arrow_up</i> -->
	</div>

	<!-- Search bar -->
	<div class="searchbar mdui-toolbar mdui-color-blue mdui-col-xs-12"
    v-bind:class="{searchbar_active: isSearch}">
		<!-- <input
			v-on:click="toSearch"
			v-bind:class="{searchbar_input_active: isSearch}"
			class="mdui-textfield-input searchbar_input"
			type="text"
			placeholder="搜索"
		/> -->

    <!-- Search engine icon & list -->
    <div
      class="search_switch"
      v-bind:class="{search_switch_active: isSearch}"
      mdui-menu="{target: '#search_engine'}"
    >
      <img src="./assets/img/search/Google-icon.svg" v-bind:class="{iconHidden: this.searchEngine!='google'}" width="20px" height="36px"/>
      <img src="./assets/img/search/Rambler-icon.svg" v-bind:class="{iconHidden: this.searchEngine!='rambler'}" width="20px" height="36px"/>
      <img src="./assets/img/search/Bing-icon.svg" v-bind:class="{iconHidden: this.searchEngine!='bing'}" width="20px" height="36px"/>
      <img src="./assets/img/search/Baidu-icon.svg" v-bind:class="{iconHidden: this.searchEngine!='baidu'}" width="20px" height="36px"/>
      <img src="./assets/img/search/Duckduckgo-icon.svg" v-bind:class="{iconHidden: this.searchEngine!='duckduckgo'}" width="20px" height="36px"/>
      <img src="./assets/img/search/Yandex-icon.svg" v-bind:class="{iconHidden: this.searchEngine!='yandex'}" width="20px" height="36px"/>
      
    </div>
    <ul class="mdui-menu" id="search_engine">
      <li class="mdui-menu-item" v-on:click="useGoogle">
        <a href="javascript:;" class="mdui-ripple">Google</a>
      </li>
      <li class="mdui-menu-item" v-on:click="useRambler">
        <a href="javascript:;" class="mdui-ripple">Rambler</a>
      </li>
      <li class="mdui-menu-item" v-on:click="useBing">
        <a href="javascript:;" class="mdui-ripple">Bing</a>
      </li>
      <li class="mdui-menu-item" v-on:click="useBaidu">
        <a href="javascript:;" class="mdui-ripple">Baidu</a>
      </li>
      <li class="mdui-menu-item" v-on:click="useDuckduckgo">
        <a href="javascript:;" class="mdui-ripple">Duckduckgo</a>
      </li>
      <li class="mdui-menu-item" v-on:click="useYandex">
        <a href="javascript:;" class="mdui-ripple">Yandex</a>
      </li>
    </ul>

    <!-- Google -->
    <form
      action="https://www.google.com/search"
      v-bind:class="{searchbar_form_active: isSearch}"
      v-if="searchEngine == 'google'"
      class="searchbar_form"
    >
      <input
        v-on:click="toSearch"
        v-bind:class="{searchbar_input_active: isSearch}"
        class="mdui-textfield-input searchbar_input"
        type="text"
        name="q"
        autocomplete="off"
        placeholder="Search"
      >
    </form>

    <!-- Rambler -->
    <form
      action="https://r0.ru/search"
      v-bind:class="{searchbar_form_active: isSearch}"
      v-if="searchEngine == 'rambler'"
      class="searchbar_form"
    >
      <input
        v-on:click="toSearch"
        v-bind:class="{searchbar_input_active: isSearch}"
        class="mdui-textfield-input searchbar_input"
        type="text"
        name="query"
        autocomplete="off"
        placeholder="Search"
      >
    </form>

    <!-- Bing -->
    <form
      action="https://www.bing.com/search"
      v-bind:class="{searchbar_form_active: isSearch}"
      v-if="searchEngine == 'bing'"
      class="searchbar_form"
    >
      <input
        v-on:click="toSearch"
        v-bind:class="{searchbar_input_active: isSearch}"
        class="mdui-textfield-input searchbar_input"
        type="text"
        name="q"
        autocomplete="off"
        placeholder="Search"
      >
    </form>

    <!-- Baidu -->
    <form
      action="https://www.baidu.com/s"
      v-bind:class="{searchbar_form_active: isSearch}"
      v-if="searchEngine == 'baidu'"
      class="searchbar_form"
    >
      <input
        v-on:click="toSearch"
        v-bind:class="{searchbar_input_active: isSearch}"
        class="mdui-textfield-input searchbar_input"
        type="text"
        name="wd"
        autocomplete="off"
        placeholder="Search"
      >
    </form>

    <!-- Duckduckgo -->
    <form
      action="https://duckduckgo.com"
      v-bind:class="{searchbar_form_active: isSearch}"
      v-if="searchEngine == 'duckduckgo'"
      class="searchbar_form"
    >
      <input
        v-on:click="toSearch"
        v-bind:class="{searchbar_input_active: isSearch}"
        class="mdui-textfield-input searchbar_input"
        type="text"
        name="q"
        autocomplete="off"
        placeholder="Search"
      >
    </form>

    <!-- Yandex-->
    <form
      action="https://www.yandex.com/search"
      v-bind:class="{searchbar_form_active: isSearch}"
      v-if="searchEngine == 'yandex'"
      class="searchbar_form"
    >
      <input
        v-on:click="toSearch"
        v-bind:class="{searchbar_input_active: isSearch}"
        class="mdui-textfield-input searchbar_input"
        type="text"
        name="text"
        autocomplete="off"
        placeholder="Search"
      >
    </form>

    <!-- Search button -->
    <div class="search-button">
      <img src="./assets/img/search/search.svg" width="36px" height="36px"/>
    </div>
	</div>

  <!-- Overlay -->
  <div class="overlay" v-on:click="closeSearch" v-bind:class="{overlay_active: isSearch}"></div>

  <div class="card-wrap">
  	<!-- MDUI card -->
  	<div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
  		<!-- Card title -->
  		<div class="mdui-card-header card-header">
  			网站
  			<div v-on:click="editSites" class="edit">{{editOrComplete}}</div>
  		</div>

  		<div class="mdui-divider"></div>

  		<!-- Sites list -->
  		<ul class="mdui-list">
  			<li v-for="(site, index) in sites" class="site">
  				<button
  					class="remove"
  					v-bind:class="{remove_active: canRemove}"
  					v-on:click="removeSite(index)"
  				>
  					<i class="mdui-icon material-icons">close</i>
  				</button>
  				<a v-bind:href="site.url" target="_blank">
  					<div>
  						<img v-bind:src="site.icon" width="55px" height="55px" v-bind:class="{remove_active: canRemove}"/>
  					</div>
  					<div class="site-title">{{ site.title}}</div>
  				</a>
  			</li>
  			<li class="site" v-on:click="showAddpanel">
  				<i class="mdui-icon material-icons add-site-icon" v-bind:class="{iconHidden: hasAddPanel}">add</i>
  				<i class="mdui-icon material-icons add-site-icon" v-bind:class="{iconHidden: !hasAddPanel}">close</i>
  				<div class="site-title">添加</div>
  			</li>
  		</ul>

  		<!-- New site panel -->
  		<div
  			class="new_site mdui-color-blue-grey-50"
  			v-bind:class="{new_site_active: hasAddPanel}"
  		>
  			<div class="new-site-info mdui-textfield mdui-textfield-floating-label">
  				<label class="mdui-textfield-label">网站地址</label>
  				<input class="mdui-textfield-input" type="url" v-model="newSiteurl" />
  			</div>
  			<div class="new-site-info mdui-textfield mdui-textfield-floating-label">
  				<label class="mdui-textfield-label">网站名称</label>
  				<input class="mdui-textfield-input" type="text" v-model="newSitetitle" />
  			</div>
  			<div class="new-site-info mdui-textfield mdui-textfield-floating-label">
  				<label class="mdui-textfield-label">网站图标地址</label>
  				<input class="mdui-textfield-input" type="text" v-model="newSiteicon" />
  			</div>
  			<button class="addtodo_button mdui-btn mdui-btn-raised mdui-color-theme-accent mdui-ripple" v-on:click="addSite">添加</button>
  		</div>

  	</div>


    <!-- test -->
    <!-- <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card "> -->
      <!-- Card title -->
 <!--      <div class="mdui-card-header card-header">
        test
        <div class="edit">{{test}}</div>
      </div>

      <div class="mdui-divider"></div> -->

      <!-- Sites list -->
   <!--    <ul class="mdui-list">
        <li v-for="(test_site, index) in test_sites" class="site">
          <a v-bind:href="design_site.url" target="_blank">
            <div>
              <img v-bind:src="design_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ design_site.title }}</div>
          </a>
        </li>
      </ul> -->

<!--     </div> -->


    <!-- 咨讯 -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        咨讯
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(info_site, index) in info_sites" class="site">
          <a v-bind:href="info_site.url" target="_blank">
            <div>
              <img v-bind:src="info_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ info_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>


    <!-- 社区 -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        社区
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(community_site, index) in community_sites" class="site">
          <a v-bind:href="community_site.url" target="_blank">
            <div>
              <img v-bind:src="community_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ community_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- Coding -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        Coding
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(coding_site, index) in coding_sites" class="site">
          <a v-bind:href="coding_site.url" target="_blank">
            <div>
              <img v-bind:src="coding_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ coding_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>


    <!-- Design -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        Design
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(design_site, index) in design_sites" class="site">
          <a v-bind:href="design_site.url" target="_blank">
            <div>
              <img v-bind:src="design_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ design_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- 翻译 -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        翻译
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(translate_site, index) in translate_sites" class="site">
          <a v-bind:href="translate_site.url" target="_blank">
            <div>
              <img v-bind:src="translate_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ translate_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>


    <!-- Book -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        Book
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(book_site, index) in book_sites" class="site">
          <a v-bind:href="book_site.url" target="_blank">
            <div>
              <img v-bind:src="book_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ book_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- Publishing -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        Publishing
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(publishing_site, index) in publishing_sites" class="site">
          <a v-bind:href="publishing_site.url" target="_blank">
            <div>
              <img v-bind:src="publishing_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ publishing_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- 工具 -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        工具
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(tool_site, index) in tool_sites" class="site">
          <a v-bind:href="tool_site.url" target="_blank">
            <div>
              <img v-bind:src="tool_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ tool_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- Photos -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        Photos
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(photos_site, index) in photos_sites" class="site">
          <a v-bind:href="photos_site.url" target="_blank">
            <div>
              <img v-bind:src="photos_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ photos_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- 博客 -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        博客
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(blog_site, index) in blog_sites" class="site">
          <a v-bind:href="blog_site.url" target="_blank">
            <div>
              <img v-bind:src="blog_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ blog_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- MDUI card -->
  	<div class="mdui-card mdui-col-xs-12 mdui-col-md-5 mdui-col-offset-md-1 mdui-col-lg-3 mdui-shadow-0 todos-card">
      <!-- Card title -->
  		<div class="mdui-card-header card-header">
  			待办事项
  		</div>

  		<div class="mdui-divider"></div>

      <ul class="mdui-list">

        <li class="mdui-collapse-item" v-for="(todo, index) in todos">
          <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
            <label class="mdui-checkbox">
              <input type="checkbox" v-bind:checked="todo.isFinished" v-on:click="toggleFinished(todo, index)"/>
              <i class="mdui-checkbox-icon"></i>
            </label>
            <div class="mdui-list-item-content todo-item" v-if="todo.isFinished == true"><del>{{ todo.label }}</del></div>
            <div class="mdui-list-item-content todo-item" v-else>{{ todo.label }}</div>
            <i class="mdui-collapse-item-arrow mdui-icon material-icons" v-on:click="removeTodo(todo, index)" style="font-size: 19px;">close</i>
          </div>
          <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
            <li class="mdui-list-item mdui-ripple todo-sub-list" v-on:click="removeTodo(todo, index)">删除</li>
          </ul>
        </li>

      </ul>

      <div>
        <div class="mdui-textfield todo_input_wrap">
          <input v-model="newTodo" v-on:keyup.enter="addTodo" class="mdui-textfield-input" type="text" placeholder="Add Todo"/>
        </div>
        <button class="mdui-btn mdui-btn-icon mdui-ripple add_todo_button" v-on:click="addTodo">
          <i class="mdui-icon material-icons mdui-list-item-icon">send</i>
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <div class="footer mdui-card mdui-col-xs-12">
      <ul class="social-buttons">
        <!-- <li><a href="https://github.com/viosey/O" target="_blank"><img src="./assets/img/footer/github.svg" alt="" width="24px" height="24px;"></a></li> -->
        <li><a href="https://github.com/ZetaoYang/oSoga" target="_blank"><img src="./assets/img/footer/about.svg" alt="" width="24px" height="24px;"></i></a></li>
      </ul>

      <p class="copyright">
        © 2017~2019 &nbsp;<a href="https://sogaso.ga" target="_blank">HOME</a>
      </p>
  </div>

</div>
</template>

<script>
import Store from './store'
//import './assets/js/jquery.cxselect.min.js'

// jQuery
// $(document).ready(function() {
//   $(".setCity").click(function(){
//     Store.setCookie("cityid", $(".area").val(), 365);
//   });
//   // City select
//   $.cxSelect.defaults.url = "https://o.sogaso.ga/static/cityid.min.json";
//   $("#cities").cxSelect({
//     selects : ["province", "city", "area"],
//     nodata : "none",
//     jsonName : "name",
//     jsonValue : "code",
//     jsonSub : "sublist"
//   });

  // Time
  // function getDate(addDayCount) {
  //     var dd = new Date();
  //     dd.setDate(dd.getDate()+addDayCount);// 获取 AddDayCount 天后的日期
  //     var y = dd.getFullYear();
  //     var m = dd.getMonth()+1;// 获取当前月份的日期
  //     var d = dd.getDate();
  //     return y + '/' + (m<10 ? "0" + m : m)+ '/' + (d<10 ? "0"+ d : d);
  // }

  // 一言
  // var aword=$.ajax({url:"https://api.lwl12.com/hitokoto/main/get", async:false});
  // $(".searchbar_input").attr("placeholder", aword.responseText);

  // Weather
  // var cityid = 101020100;
//   var cityid = Store.getCookie('cityid');
//   var weather=$.ajax({url:"https://weather.yk.tn/myapp/weather/data/index.php?ityID=" + cityid, async:false});

//   var weatherJson = JSON.parse(weather.responseText);

//   var weather = new Array();
//   var temp = new Array();
//   weather[0] = weatherJson.weatherinfo.weather1;
//   weather[1] = weatherJson.weatherinfo.weather2;
//   weather[2] = weatherJson.weatherinfo.weather3;
//   weather[3] = weatherJson.weatherinfo.weather4;
//   weather[4] = weatherJson.weatherinfo.weather5;
//   temp[0] = weatherJson.weatherinfo.temp1;
//   temp[1] = weatherJson.weatherinfo.temp2;
//   temp[2] = weatherJson.weatherinfo.temp3;
//   temp[3] = weatherJson.weatherinfo.temp4;
//   temp[4] = weatherJson.weatherinfo.temp5;

//   $(".now_city_edit").html(weatherJson.weatherinfo.city);
//   $(".now_city").html(weatherJson.weatherinfo.city);
//   $(".now_temp").html(weatherJson.weatherinfo.temp1);

//   for (var i=0; i<5; i++){
//       $(".weather_list-date").eq(i).html(getDate(i));
//       $(".weather_list-weather").eq(i).html(weather[i]);
//       $(".weather_list-temp").eq(i).html(temp[i]);
//   }

//   $( ".search-button" ).click(function() {
//     $( ".searchbar_form" ).submit();
//   });
// })

// init first visit
if (!Store.getCookie('visited')) {
	if(Store.fetch_site().length == 0){
		Store.save_site([
			{
			    "url": "https://github.com",
			    "title": "GitHub",
			    "icon": require('./assets/img/icons/github.svg')
			}, {
			    "url": "https://about.gitlab.com",
			    "title": "GitLab",
			    "icon": require('./assets/img/icons/gitlab.svg')
			}, {
				"url": "https://bitbucket.org",
			    "title": "Bitbucket",
			    "icon": require('./assets/img/icons/bitbucket.svg')
			}, {
			    "url": "https://coding.net",
			    "title": "Coding",
			    "icon": require('./assets/img/icons/coding.svg')
			}, {
				"url": "https://codepen.io",
				"title": "CodePen",
				"icon": require('./assets/img/icons/codepen.svg')
			}, {
				"url": "https://codesandbox.io",
				"title": "CodeSandbox",
				"icon": require('./assets/img/icons/codesandbox.svg')
			}, {
				"url": "https://www.wikipedia.org",
				"title": "Wikipedia",
				"icon": require('./assets/img/icons/wikipedia.svg')
			}, {
				"url": "https://medium.com",
				"title": "Medium",
				"icon": require('./assets/img/icons/medium.svg')
			}, {
				"url": "https://facebook.com/",
				"title": "Facebook",
				"icon": require('./assets/img/icons/facebook.svg')
			}, {
				"url": "https://twitter.com/",
				"title": "Twitter",
				"icon": require('./assets/img/icons/twitter.svg')
			}, {
				"url": "https://zhihu.com",
				"title": "知乎",
				"icon": require('./assets/img/icons/zhihu.svg')
			}, {
			    "url": "http://www.jianshu.com",
			    "title": "简书",
			    "icon": require('./assets/img/icons/jianshu.svg')
			}, {
			    "url": "https://wx.qq.com",
			    "title": "微信网页版",
			    "icon": require('./assets/img/icons/weixin.svg')
			}, {
			    "url": "https://wx.zsxq.com/dweb",
			    "title": "知识星球",
			    "icon": require('./assets/img/icons/zsxq.svg')
			}, {
			    "url": "https://qzone.qq.com",
			    "title": "QZone",
			    "icon": require('./assets/img/icons/qzone.svg')
			}, {
			    "url": "http://weibo.com/",
			    "title": "微博",
			    "icon": require('./assets/img/icons/weibo.svg')
			}, {
				"url": "https://www.dropbox.com",
			    "title": "Dropbox",
			    "icon": require('./assets/img/icons/dropbox.svg')
			}, {
			    "url": "https://www.youtube.com",
			    "title": "Youtube",
			    "icon": require('./assets/img/icons/youtube.svg')
			}, {
			    "url": "https://quora.com",
			    "title": "Quora",
			    "icon": require('./assets/img/icons/quora.svg')
			}, {
			    "url": "https://getpocket.com/",
			    "title": "Pocket",
			    "icon": require('./assets/img/icons/pocket.svg')
			}, {
			    "url": "http://stackoverflow.com/",
			    "title": "Stack Overflow",
			    "icon": require('./assets/img/icons/stackoverflow.svg')
			}, {
			    "url": "https://www.amazon.com/",
			    "title": "Amazon",
			    "icon": require('./assets/img/icons/amazon.svg')
			}, {
			    "url": "https://taobao.com/",
			    "title": "淘宝",
			    "icon": require('./assets/img/icons/taobao.svg')
			}, {
			    "url": "http://coolapk.com",
			    "title": "酷安",
			    "icon": require('./assets/img/icons/coolapk.svg')
			}, {
			    "url": "http://douban.com",
			    "title": "豆瓣",
			    "icon": require('./assets/img/icons/douban.svg')
			}, {
			    "url": "http://www.latexstudio.net",
			    "title": "LaTeX工作室",
			    "icon": require('./assets/img/icons/latexstudio.svg')
			}, {
			    "url": "http://weixin.sogou.com",
			    "title": "搜狗微信",
			    "icon": require('./assets/img/icons/weixin-sogou.svg')
			}, {
			    "url": "https://www.ted.com",
			    "title": "TED",
			    "icon": require('./assets/img/icons/ted.svg')
			}, {
			    "url": "https://libraries.io",
			    "title": "Libraries.io",
			    "icon": require('./assets/img/icons/libraries-io.svg')
			}, {
			    "url": "http://theme.npm.edu.tw/opendata",
			    "title": "故宮Open Data專區",
			    "icon": require('./assets/img/icons/npm-opendata.svg')
			}, {
			    "url": "https://itch.io",
			    "title": "itch.io",
			    "icon": require('./assets/img/icons/itch-io.svg')
			}, {
			    "url": "https://www.humblebundle.com",
			    "title": "Humble Bundle",
			    "icon": require('./assets/img/icons/humblebundle.svg')
			}, {
			    "url": "https://indienova.com",
			    "title": "indienova 独立游戏",
			    "icon": require('./assets/img/icons/indienova.svg')
			}, {
			    "url": "https://agirls.aotter.net",
			    "title": "電獺少女",
			    "icon": require('./assets/img/icons/agirls.svg')
			}, {
			    "url": "https://luooqi.com",
			    "title": "鱼声音乐",
			    "icon": require('./assets/img/icons/luooqi.svg')
			}, {
				"url": "https://www.tianfateng.cn",
			    "title": "田间小站",
			    "icon": require('./assets/img/icons/default.svg')
			}, {
				"url": "https://www.yixi.tv",
			    "title": "一席",
			    "icon": require('./assets/img/icons/yixi.svg')
			}, {
				"url": "https://www.britishcouncil.org",
			    "title": "British Council",
			    "icon": require('./assets/img/icons/britishcouncil.svg')
			}, {
				"url": "https://tw.voicetube.com",
			    "title": "VoiceTube",
			    "icon": require('./assets/img/icons/voicetube.svg')
			}, {
				"url": "http://songtasty.com/song",
			    "title": "SongTasty",
			    "icon": require('./assets/img/icons/songtasty.svg')
			}, {
				"url": "https://musescore.org",
			    "title": "Musescore",
			    "icon": require('./assets/img/icons/musescore.svg')
			}, {
				"url": "https://www.kuaiyilicai.com",
			    "title": "快易理财网--理财改变生活",
			    "icon": require('./assets/img/icons/default.svg')
			}

		])
	}

  // test
  // if(Store.fetch_test_site().length == 0){
  //   Store.save_test_site([
  //     {
  //       "url": "https://github.com/",
  //       "title": "Github",
  //       "icon": require('./assets/img/icons/github.svg')
  //     }
  //   ])
  // }

	if(Store.fetch_todo().length == 0){
	Store.save_todo([
		  	{
		    "label": "1. Add your own TODO ITEMS.",
					"isFinished": false
			}
		])
	}

	Store.setCookie("se", "google", 365);
	Store.setCookie("visited", "true", 365);
	if(!Store.getCookie("cityid")){
		Store.setCookie("cityid", 101010100, 365);
	}
}

// 资讯
var info_items = [
	{
		"url": "https://news.ycombinator.com",
		"title": "Hacker News",
		"icon": require('./assets/img/icons/hacker-news.svg')
	},{
		"url": "http://www.echojs.com",
		"title": "Echo JS",
		"icon": require('./assets/img/icons/echo-js.svg')
	},{
		"url": "https://juejin.im",
		"title": "掘金",
		"icon": require('./assets/img/icons/juejin.svg')
	},{
		"url": "http://gank.io",
		"title": "干货集中营",
		"icon": require('./assets/img/icons/gank.svg')
	},{
		"url": "https://weekly.75team.com",
		"title": "奇舞周刊",
		"icon": require('./assets/img/icons/75team.svg')
	},{
		"url": "https://wanqu.co",
		"title": "湾区日报",
		"icon": require('./assets/img/icons/wanqu.svg')
	},{
		"url": "https://coolshell.cn",
		"title": "酷壳",
		"icon": require('./assets/img/icons/coolshell.svg')
	},{
		"url": "https://www.oschina.net",
		"title": "OSChina",
		"icon": require('./assets/img/icons/oschina.svg')
	},{
		"url": "https://itsfoss.com",
		"title": "It's FOSS",
		"icon": require('./assets/img/icons/itsfoss.svg')
	},{
		"url": "http://digg.com",
		"title": "Digg",
		"icon": require('./assets/img/icons/digg.svg')
	},{
		"url": "https://www.usatoday.com",
		"title": "USA TODAY",
		"icon": require('./assets/img/icons/usatoday.svg')
	},{
		"url": "http://fortune.com",
		"title": "Fortune",
		"icon": require('./assets/img/icons/fortune.svg')
	},{
		"url": "http://www.foxnews.com",
		"title": "Foxnews",
		"icon": require('./assets/img/icons/foxnews.svg')
	},{
		"url": "https://sspai.com",
		"title": "少数派",
		"icon": require('./assets/img/icons/sspai.svg')
	},{
		"url": "http://www.qdaily.com",
		"title": "好奇心日报",
		"icon": require('./assets/img/icons/qdaily.svg')
	},{
		"url": "https://www.toodaylab.com",
		"title": "理想生活实验室",
		"icon": require('./assets/img/icons/toodaylab.svg')
	},{
		"url": "https://matters.news",
		"title": "Matters",
		"icon": require('./assets/img/icons/matters.svg')
	}

];

// 社区
var community_items = [
	{
		"url": "https://v2ex.com",
		"title": "V2EX",
		"icon": require('./assets/img/icons/v2ex.svg')
	},{
		"url": "https://segmentfault.com",
		"title": "SegmentFault",
		"icon": require('./assets/img/icons/segmentfault.svg')
	},{
		"url": "https://hacpai.com",
		"title": "黑客派",
		"icon": require('./assets/img/icons/hacpai.svg')
	},{
		"url": "http://www.jcodecraeer.com",
		"title": "泡在网上的日子",
		"icon": require('./assets/img/icons/jcodecraeer.svg')
	},{
		"url": "https://www.reddit.com",
		"title": "Reddit",
		"icon": require('./assets/img/icons/reddit.svg')
	},{
		"url": "http://liqi.io",
		"title": "利器",
		"icon": require('./assets/img/icons/liqi.svg')
	}
]

// Coding
var coding_items = [
	{
		"url": "http://www.spoj.com",
		"title": "SPOJ",
		"icon": require('./assets/img/icons/spoj.svg')
	},{
		"url": "http://www.hihocoder.com",
		"title": "hihoCoder",
		"icon": require('./assets/img/icons/hiho.svg')
	},{
		"url": "https://leetcode.com",
		"title": "LeetCode",
		"icon": require('./assets/img/icons/leetcode.svg')
	},{
		"url": "http://www.lintcode.com/zh-cn",
		"title": "LintCode",
		"icon": require('./assets/img/icons/lintcode.svg')
	},{
		"url": "https://www.nowcoder.com",
		"title": "牛客网",
		"icon": require('./assets/img/icons/nowcoder.svg')
	},{
		"url": "http://cssreference.io",
		"title": "CSS Reference",
		"icon": require('./assets/img/icons/css-reference.svg')
	},{
		"url": "http://htmlreference.io",
		"title": "HTML Reference",
		"icon": require('./assets/img/icons/html-reference.svg')
	},{
		"url": "https://www.shiyanlou.com",
		"title": "实验楼",
		"icon": require('./assets/img/icons/shiyanlou.svg')
	},{
		"url": "http://www.imooc.com",
		"title": "慕课网",
		"icon": require('./assets/img/icons/imooc.svg')
	},{
		"url": "https://uiiiuiii.com",
		"title": "优优教程网",
		"icon": require('./assets/img/icons/uiiiuiii.svg')
	},{
		"url": "https://www.tutorialspoint.com",
		"title": "TutorialSpoint",
		"icon": require('./assets/img/icons/tutorialspoint.svg')
	},{
		"url": "https://www.w3schools.com",
		"title": "W3Schools",
		"icon": require('./assets/img/icons/w3schools.svg')
	},{
		"url": "https://www.w3cplus.com",
		"title": "w3cplus",
		"icon": require('./assets/img/icons/w3cplus.svg')
	}

];

// Design
var design_items = [
	{
		"url": "https://www.behance.net/",
		"title": "Behance",
		"icon": require('./assets/img/icons/behance.svg')
	},{
		"url": "https://dribbble.com/",
		"title": "Dribbble",
		"icon": require('./assets/img/icons/dribbble.svg')
	},{
		"url": "https://www.pinterest.com",
		"title": "Pinterest",
		"icon": require('./assets/img/icons/pinterest.svg')
	},{
		"url": "https://www.artstation.com",
		"title": "Artstation",
		"icon": require('./assets/img/icons/artstation.svg')
	},{
		"url": "http://www.ui.cn",
		"title": "UI中国",
		"icon": require('./assets/img/icons/ui-cn.svg')
	},{
		"url": "http://www.uisdc.com",
		"title": "优设",
		"icon": require('./assets/img/icons/uisdc.svg')
	},{
		"url": "https://www.deviantart.com",
		"title": "Deviantart",
		"icon": require('./assets/img/icons/deviantart.svg')
	},{
		"url": "https://webkul.github.io/coolhue",
		"title": "coolHue",
		"icon": require('./assets/img/icons/coolhue.svg')
	},{
		"url": "http://tgideas.qq.com",
		"title": "TGideas",
		"icon": require('./assets/img/icons/tgideas.svg')
	},{
		"url": "https://mockuper.net",
		"title": "Mockuper",
		"icon": require('./assets/img/icons/mockuper.svg')
	}
];

// 翻译
var translate_items = [
	{
		"url": "http://www.zcfy.cc",
		"title": "众成翻译",
		"icon": require('./assets/img/icons/zcfy.svg')
	},{
		"url": "https://github.com/xitu/gold-miner",
		"title": "掘金翻译",
		"icon": require('./assets/img/icons/juejin.svg')
	},{
		"url": "http://g.yeeyan.org",
		"title": "译言古登堡计划",
		"icon": require('./assets/img/icons/yeeyan.svg')
	}

];

// Book
var book_items = [
	{
		"url": "https://shuge.org",
		"title": "书格",
		"icon": require('./assets/img/icons/shuge.svg')
	},{
		"url": "https://bookset.me",
		"title": "Bookset",
		"icon": require('./assets/img/icons/bookset.svg')
	},{
		"url": "http://www.gutenberg.org",
		"title": "Gutenberg",
		"icon": require('./assets/img/icons/gutenberg.svg')
	},{
		"url": "https://www.planetebook.com",
		"title": "Planet eBook",
		"icon": require('./assets/img/icons/planetebook.svg')
	},{
		"url": "http://ebooksplan.club",
		"title": "扫地僧的橱柜",
		"icon": require('./assets/img/icons/ebooksplan.svg')
	},{
		"url": "https://itbook.download",
		"title": "Itbook",
		"icon": require('./assets/img/icons/itbook.svg')
	},{
		"url": "https://bookfere.com",
		"title": "书伴",
		"icon": require('./assets/img/icons/bookfere.svg')
	},{
		"url": "http://www.epubit.com.cn",
		"title": "异步社区",
		"icon": require('./assets/img/icons/epubit.svg')
	},{
		"url": "https://www.oreilly.com",
		"title": "O'Reilly Media",
		"icon": require('./assets/img/icons/oreilly.svg')
	},{
		"url": "https://www.jiumodiary.com",
		"title": "鸠摩搜索",
		"icon": require('./assets/img/icons/jiumodiary.svg')
	},{
		"url": "http://gen.lib.rus.ec",
		"title": "Library Genesis",
		"icon": require('./assets/img/icons/libgen.svg')
	},{
		"url": "https://ebook.huzerui.com",
		"title": "熊猫搜书",
		"icon": require('./assets/img/icons/panda-search.svg')
	},{
		"url": "https://ctext.org",
		"title": "中国哲学书籍电子化计划",
		"icon": require('./assets/img/icons/default.svg')
	},{
		"url": "http://mebook.cc",
		"title": "我的小书屋",
		"icon": require('./assets/img/icons/mebook.svg')
	},{
		"url": "https://sobooks.cc",
		"title": "SoBooks",
		"icon": require('./assets/img/icons/sobooks.svg')
	},{
		"url": "https://b-ok.xyz",
		"title": "Electronic library",
		"icon": require('./assets/img/icons/b-ok.svg')
	},{
		"url": "https://readfree.me",
		"title": "Readfree",
		"icon": require('./assets/img/icons/readfree.svg')
	}
];

// Publishing
var publishing_items = [
	{
		"url": "https://www.packtpub.com",
		"title": "Packtpub",
		"icon": require('./assets/img/icons/packtpub.svg')
	},{
		"url": "https://www.manning.com",
		"title": "Manning",
		"icon": require('./assets/img/icons/manning.svg')
	}
];

// 工具
var tool_items = [
	{
		"url": "https://unicode-table.com",
		"title": "Unicode 字符百科",
		"icon": require('./assets/img/icons/unicode.svg')
	},{
		"url": "https://image.online-convert.com",
		"title": "Online image converter",
		"icon": require('./assets/img/icons/online-converter.svg')
	},{
		"url": "http://hslpicker.com",
		"title": "HSL Color Picker",
		"icon": require('./assets/img/icons/hsl-color-picker.svg')
	},{
		"url": "http://www.favicon.cc",
		"title": "favicon Generator",
		"icon": require('./assets/img/icons/favicon-generator.svg')
	},{
		"url": "http://asciiflow.com",
		"title": "ASCIIFlow",
		"icon": require('./assets/img/icons/asciiflow.svg')
	},{
		"url": "https://sketch.io/sketchpad",
		"title": "Sketchpad",
		"icon": require('./assets/img/icons/sketchpad.svg')
	},{
		"url": "http://ping.chinaz.com",
		"title": "Ping 检测",
		"icon": require('./assets/img/icons/chinaz.svg')
	},{
		"url": "https://www.ipip.net",
		"title": "IPIP.NET",
		"icon": require('./assets/img/icons/ipip.svg')
	},{
		"url": "https://uptimerobot.com",
		"title": "Uptime Robot",
		"icon": require('./assets/img/icons/uptime-robot.svg')
	},{
		"url": "https://code2flow.com",
		"title": "code2flow",
		"icon": require('./assets/img/icons/code2flow.svg')
	},{
		"url": "https://www.iloveimg.com",
		"title": "iLoveIMG",
		"icon": require('./assets/img/icons/iloveimg.svg')
	},{
		"url": "https://browserframe.com",
		"title": "BrowserFrame",
		"icon": require('./assets/img/icons/browserframe.svg')
	},{
		"url": "https://cn.office-converter.com",
		"title": "Office-converter",
		"icon": require('./assets/img/icons/office-converter.svg')
	},{
		"url": "https://www.wolframalpha.com",
		"title": "WolframAlpha",
		"icon": require('./assets/img/icons/wolframalpha.svg')
	},{
		"url": "https://www.kuaidi100.com",
		"title": "快递100",
		"icon": require('./assets/img/icons/kuaidi100.svg')
	},{
		"url": "http://www.freesmsverifications.com",
		"title": "Receive Free SMS Online",
		"icon": require('./assets/img/icons/freesmsverifications.svg')
	},{
		"url": "https://www.tutorialspoint.com/execute_bash_online.php",
		"title": "Bash Online",
		"icon": require('./assets/img/icons/bash-online.svg')
	},{
		"url": "https://www.onlineocr.net",
		"title": "Online OCR",
		"icon": require('./assets/img/icons/onlineocr.svg')
	},{
		"url": "https://explainshell.com",
		"title": "ExplainShell",
		"icon": require('./assets/img/icons/explainshell.svg')
	},{
		"url": "https://gitpitch.com",
		"title": "GitPitch",
		"icon": require('./assets/img/icons/gitpitch.svg')
	},{
		"url": "https://audio.rip",
		"title": "Audio Rip",
		"icon": require('./assets/img/icons/audio-rip.svg')
	},{
		"url": "https://zh-hans.tld-list.com",
		"title": "TLD LIST",
		"icon": require('./assets/img/icons/tld-list.svg')
	},{
		"url": "https://www.remove.bg",
		"title": "Remove Background from Image",
		"icon": require('./assets/img/icons/remove-bg.svg')
	},{
		"url": "http://devdocs.io",
		"title": "DevDocs API Documentation",
		"icon": require('./assets/img/icons/devdocs.svg')
	},{
		"url": "https://www.flightradar24.com",
		"title": "Flightradar24",
		"icon": require('./assets/img/icons/flightradar24.svg')
	},{
		"url": "https://carbon.now.sh",
		"title": "Carbon",
		"icon": require('./assets/img/icons/carbon.svg')
	},{
		"url": "http://chartmage.com/intro.html",
		"title": "Chart Mage",
		"icon": require('./assets/img/icons/chartmage.svg')
	},{
		"url": "https://www.osboxes.org",
		"title": "OSBoxes",
		"icon": require('./assets/img/icons/osboxes.svg')
	},{
		"url": "http://www.downfi.com/video",
		"title": "小视频下载",
		"icon": require('./assets/img/icons/downfi-video.svg')
	},{
		"url": "https://www.parsevideo.com",
		"title": "视频解析网",
		"icon": require('./assets/img/icons/parsevideo.svg')
	},{
		"url": "https://avogadr.io",
		"title": "Molecular Wallpaper Generator",
		"icon": require('./assets/img/icons/avogadr.svg')
	},{
		"url": "http://papersizes.io",
		"title": "Paper Sizes",
		"icon": require('./assets/img/icons/papersizes.svg')
	},{
		"url": "https://opencc.byvoid.com",
		"title": "開放中文轉換",
		"icon": require('./assets/img/icons/occ.svg')
	},{
		"url": "http://www.nirsoft.net",
		"title": "NirSoft",
		"icon": require('./assets/img/icons/nirsoft.svg')
	},{
		"url": "https://randomkeygen.com",
		"title": "RandomKeygen",
		"icon": require('./assets/img/icons/randomkeygen.svg')
	},{
		"url": "http://www.feemic.cn/mooc",
		"title": "Mooc search",
		"icon": require('./assets/img/icons/mooc-search.svg')
	},{
		"url": "http://www.tlhiv.org/rast2vec",
		"title": "Rast2Vec",
		"icon": require('./assets/img/icons/rast2vec.svg')
	},{
		"url": "https://regex101.com",
		"title": "regex101",
		"icon": require('./assets/img/icons/regex101.svg')
	},{
		"url": "https://lunwen.im",
		"title": "喵咪论文",
		"icon": require('./assets/img/icons/lunwen.svg')
	},{
		"url": "https://www.80xueshu.com",
		"title": "80学术",
		"icon": require('./assets/img/icons/default.svg')
	},{
		"url": "https://www.listennotes.com",
		"title": "Listen Notes",
		"icon": require('./assets/img/icons/listennotes.svg')
	},{
		"url": "https://squoosh.app",
		"title": "Squoosh",
		"icon": require('./assets/img/icons/squoosh.svg')
	},{
		"url": "https://www.draw.io",
		"title": "Draw",
		"icon": require('./assets/img/icons/draw.svg')
	},{
		"url": "https://www.channelshunt.com",
		"title": "ChannelsHunt",
		"icon": require('./assets/img/icons/channelshunt.svg')
	},{
		"url": "https://www.findyoutube.net",
		"title": "FindYoutube",
		"icon": require('./assets/img/icons/findyoutube.svg')
	},{
		"url": "http://www.everyonepiano.cn",
		"title": "人人钢琴网",
		"icon": require('./assets/img/icons/everyonepiano.svg')
	},{
		"url": "https://www.midifan.com",
		"title": "Midifan",
		"icon": require('./assets/img/icons/midifan.svg')
	}

];


// Photos
var photos_items = [
	{
		"url": "https://unsplash.com",
		"title": "Unsplash",
		"icon": require('./assets/img/icons/unsplash.svg')
	},{
		"url": "https://500px.com",
		"title": "500px",
		"icon": require('./assets/img/icons/500.svg')
	},{
		"url": "https://bing.ioliu.cn",
		"title": "必应壁纸",
		"icon": require('./assets/img/icons/bing.svg')
	},{
		"url": "https://www.novapattern.com",
		"title": "Novapattern",
		"icon": require('./assets/img/icons/novapattern.svg')
	},{
		"url": "https://www.z4a.net",
		"title": "Z4A图床",
		"icon": require('./assets/img/icons/z4a.svg')
	},{
		"url": "https://sm.ms",
		"title": "SM.MS",
		"icon": require('./assets/img/icons/smms.svg')
	},{
		"url": "https://imgur.com",
		"title": "imgur",
		"icon": require('./assets/img/icons/imgur.svg')
	},{
		"url": "https://www.flickr.com",
		"title": "Flickr",
		"icon": require('./assets/img/icons/flickr.svg')
	},{
		"url": "http://pngimg.com",
		"title": "PNG images with transparent background",
		"icon": require('./assets/img/icons/pngimg.svg')
	},{
		"url": "https://www.hppic.com",
		"title": "嗬品 | 小清新简约手机壁纸",
		"icon": require('./assets/img/icons/hppic.svg')
	},{
		"url": "https://wallroom.io",
		"title": "HD/4K/5K Resolution Wallpapers/Backgrounds",
		"icon": require('./assets/img/icons/wallroom.svg')
	}
];

// Blog
var blog_items = [
	{
		"url": "https://blog.spoongraphics.co.uk",
		"title": "Spoon Graphics",
		"icon": require('./assets/img/icons/spoongraphics.svg')
	},{
		"url": "http://www.ruanyifeng.com/blog",
		"title": "阮一峰的网络日志",
		"icon": require('./assets/img/icons/ruanyifeng.svg')
	},{
		"url": "https://zty.js.org",
		"title": "True Me",
		"icon": require('./assets/img/icons/true-me.svg')
	},{
		"url": "https://lepture.com",
		"title": "Just lepture",
		"icon": require('./assets/img/icons/lepture.svg')
	}

];

  //  console.log(Store.fetch_site().length)
export default {
	data() {
		return {
      		editOrComplete: '编辑',
      // test: 'test',
      		searchEngine: Store.getCookie('se'),
			newSiteurl: '',
			newSitetitle: '',
			newSiteicon: '',
      		newTodo: '',
			canRemove: false,
			hasAddPanel: false,
			isSearch: false,
      //hasWeather: false,
      // test_sites: Store.fetch_test_site(),
			sites: Store.fetch_site(),
			info_sites: info_items,
			community_sites: community_items,
			coding_sites: coding_items,
			design_sites: design_items,
			translate_sites: translate_items,
			book_sites: book_items,
			publishing_sites: publishing_items,
			tool_sites: tool_items,
			photos_sites: photos_items,
			blog_sites: blog_items,
			todos: Store.fetch_todo()
		}
	},
	watch: {
    // test_sites: {
    //   handler: function(test_sites) {
    //     Store.save_test_site(test_sites)
    //   },
    //   deep: true
    // },
		sites: {
			handler: function(sites) {
				Store.save_site(sites)
			},
			deep: true
		},
	    info_sites: {
	        handler: function(info_sites) {
	        	Store.fetch_nostore_site(info_sites)
	        },
	        deep: true
	    },
	    community_sites: {
	        handler: function(community_sites) {
	        	Store.fetch_nostore_site(community_sites)
	        },
	        deep: true
	    },
	    coding_sites: {
	        handler: function(coding_sites) {
	        	Store.fetch_nostore_site(coding_sites)
	        },
	        deep: true
	    },
	    design_sites: {
	        handler: function(design_sites) {
	        	Store.fetch_nostore_site(design_sites)
	        },
	        deep: true
	    },
	    translate_sites:{
	        handler: function(translate_sites) {
	        	Store.fetch_nostore_site(translate_sites)
	        },
	        deep: true
	    },
	    book_sites:{
	        handler: function(book_sites) {
	        	Store.fetch_nostore_site(book_sites)
	        },
	        deep: true
	    },
	    tool_sites:{
	        handler: function(tool_sites) {
	        	Store.fetch_nostore_site(tool_sites)
	        },
	        deep: true
	    },
	    photos_sites:{
	        handler: function(photos_sites) {
	            Store.fetch_nostore_site(photos_sites)
	        },
	        deep: true
	    },
	    blog_sites:{
			handler: function(blog_sites) {
				Store.fetch_nostore_site(blog_sites)
			},
	        deep: true
	    },
	    todos: {
			handler: function (todos) {
				Store.save_todo(todos)
			},
	    	deep: true
	    }
	},
	methods: {
		showAddpanel: function(){
			this.hasAddPanel = !this.hasAddPanel;
		},
		addSite: function() {
			this.sites.push({
				url: this.newSiteurl,
				title: this.newSitetitle,
				icon: (this.newSiteicon ? this.newSiteicon : require('./assets/img/icons/default.svg'))
			})
			this.newSiteurl = ''
			this.newSitetitle = ''
			this.newSiteicon = ''
		},
		removeSite: function(index) {
			this.sites.splice(index, 1);
		},
		editSites: function() {
			this.canRemove = !this.canRemove;
		    if(this.canRemove == true) this.editOrComplete = '完成';
		    if(this.canRemove == false) this.editOrComplete = '编辑';
		},
	    addTodo: function(){
			this.todos.push({
				label: this.newTodo,
				isFinished: false
			})
			this.newTodo = ''
	    },
		removeTodo: function (todo, index) {
			this.todos.splice(index, 1);
			var _this = this;
			mdui.snackbar({
			message: 'Item deleted',
			buttonText: 'undo',
			onButtonClick: function(){
					_this.todos.push({
						label: todo.label,
						isFinished: todo.isFinished
					})
				}
			});
		},
	    toggleFinished: function (todo, index) {
	        todo.isFinished = !todo.isFinished
	    },
		toSearch: function() {
			if(this.isSearch == false){
				this.isSearch = true
			}
		},
	    closeSearch: function() {
			if(this.isSearch == true){
				this.isSearch = false
			}
	    },
    // toggleWeather: function() {
    //   this.hasWeather = !this.hasWeather
    // },
	    useGoogle: function() {
			this.searchEngine = 'google';
			Store.setCookie("se", "google", 30);
	    },
	    useRambler: function() {
			this.searchEngine = 'rambler';
			Store.setCookie("se", "rambler", 30);
	    },
	    useBing: function() {
			this.searchEngine = 'bing';
			Store.setCookie("se", "bing", 30);
	    },
	    useBaidu: function() {
			this.searchEngine = 'baidu';
			Store.setCookie("se", "baidu", 30);
	    },
	    useDuckduckgo: function() {
			this.searchEngine = 'duckduckgo';
			Store.setCookie("se", "duckduckgo", 30);
	    },
	    useYandex: function() {
			this.searchEngine = 'yandex';
			Store.setCookie("se", "yandex", 30);
	    }
	}
}

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
