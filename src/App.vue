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
		<div>oMoonLoss</div>
		<div class="mdui-toolbar-spacer"></div>
		<!-- <div class="weather_entry" v-on:click="toggleWeather">
			<p class="now_city"></p>
			<span class="now_temp"></span>
		</div> -->
<!--     <i class="mdui-icon material-icons weather_more_icon" v-bind:class="{iconHidden: hasWeather}">keyboard_arrow_down</i>
    <i class="mdui-icon material-icons weather_more_icon" v-bind:class="{iconHidden: !hasWeather}">keyboard_arrow_up</i> -->
	</div>

	<!-- Search bar -->
  <!-- 	<div class="searchbar mdui-toolbar mdui-color-blue mdui-col-xs-12"
    v-bind:class="{searchbar_active: isSearch}"> -->
    <!-- remove 'searchbar_active' due to blocking the weather widget.  -->
  <div class="searchbar mdui-toolbar mdui-color-blue mdui-col-xs-12">
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
  			網站
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
  				<label class="mdui-textfield-label">網站地址</label>
  				<input class="mdui-textfield-input" type="url" v-model="newSiteurl" />
  			</div>
  			<div class="new-site-info mdui-textfield mdui-textfield-floating-label">
  				<label class="mdui-textfield-label">網站名稱</label>
  				<input class="mdui-textfield-input" type="text" v-model="newSitetitle" />
  			</div>
  			<div class="new-site-info mdui-textfield mdui-textfield-floating-label">
  				<label class="mdui-textfield-label">網站圖標地址</label>
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


    <!-- News & Information-->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        新聞與資訊
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

    <!-- Community -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        社區
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

    <!-- Documentary & Travel vlog -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        紀錄片與旅行記錄
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(documentary_travel_site, index) in documentary_travel_sites" class="site">
          <a v-bind:href="documentary_travel_site.url" target="_blank">
            <div>
              <img v-bind:src="documentary_travel_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ documentary_travel_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- Coding-->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        程式
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

    <!-- Course-->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        課程
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(course_site, index) in course_sites" class="site">
          <a v-bind:href="course_site.url" target="_blank">
            <div>
              <img v-bind:src="course_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ course_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>


    <!-- Design -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        設計
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

    <!-- Publishing & Book -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        出版與書籍
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(publishing_book_site, index) in publishing_book_sites" class="site">
          <a v-bind:href="publishing_book_site.url" target="_blank">
            <div>
              <img v-bind:src="publishing_book_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ publishing_book_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- Academic -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        學術
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(academic_site, index) in academic_sites" class="site">
          <a v-bind:href="academic_site.url" target="_blank">
            <div>
              <img v-bind:src="academic_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ academic_site.title }}</div>
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

    <!-- Pictures & images -->
    <div class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-10 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
      <!-- Card title -->
      <div class="mdui-card-header card-header">
        圖片
      </div>

      <div class="mdui-divider"></div>

      <!-- Sites list -->
      <ul class="mdui-list">
        <li v-for="(pictures_site, index) in pictures_sites" class="site">
          <a v-bind:href="pictures_site.url" target="_blank">
            <div>
              <img v-bind:src="pictures_site.icon" width="55px" height="55px" />
            </div>
            <div class="site-title">{{ pictures_site.title }}</div>
          </a>
        </li>
       
      </ul>

    </div>

    <!-- Blog -->
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
  			待辦事項
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
            <li class="mdui-list-item mdui-ripple todo-sub-list" v-on:click="removeTodo(todo, index)">刪除</li>
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
        <li><a href="https://github.com/ZetaoYang/oMoonLoss" target="_blank"><img src="./assets/img/footer/about.svg" alt="" width="24px" height="24px;"></i></a></li>
      </ul>

      <p class="copyright">
        © 2017~2020 &nbsp;<a href="https://o.moonloss.com" target="_blank">HOME</a>
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
//   $.cxSelect.defaults.url = "https://o.moonloss.com/static/cityid.min.json";
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
  			"url": "https://codepen.io",
  			"title": "CodePen",
  			"icon": require('./assets/img/icons/codepen.svg')
		}, {
		    "url": "https://www.figma.com",
		    "title": "Figma",
		    "icon": require('./assets/img/icons/figma.svg')
		}, {
  			"url": "https://www.wikipedia.org",
  			"title": "Wikipedia",
  			"icon": require('./assets/img/icons/wikipedia.svg')
		}, {
  			"url": "https://www.wikiart.org",
  			"title": "WikiArt - Visual Art Encyclopedia",
  			"icon": require('./assets/img/icons/wikiart.svg')
		}, {
  			"url": "https://medium.com",
  			"title": "Medium",
  			"icon": require('./assets/img/icons/medium.svg')
		}, {
	  		"url": "https://www.reddit.com",
	  		"title": "Reddit",
	  		"icon": require('./assets/img/icons/reddit.svg')
	  }, {
		    "url": "https://stackoverflow.com",
		    "title": "Stack Overflow",
		    "icon": require('./assets/img/icons/stackoverflow.svg')
		}, {
		    "url": "https://quora.com",
		    "title": "Quora",
		    "icon": require('./assets/img/icons/quora.svg')
		}, {
  			"url": "https://facebook.com",
  			"title": "Facebook",
  			"icon": require('./assets/img/icons/facebook.svg')
		}, {
  			"url": "https://twitter.com",
  			"title": "Twitter",
  			"icon": require('./assets/img/icons/twitter.svg')
		}, {
		    "url": "https://www.youtube.com",
		    "title": "Youtube",
		    "icon": require('./assets/img/icons/youtube.svg')
		}, {
		    "url": "https://www.ted.com",
		    "title": "TED",
		    "icon": require('./assets/img/icons/ted.svg')
		}, {
		    "url": "https://www.yixi.tv",
		    "title": "一席",
		    "icon": require('./assets/img/icons/yixi.svg')
		}, {
		    "url": "https://www.bilibili.com",
		    "title": "哔哩哔哩",
		    "icon": require('./assets/img/icons/bilibili.svg')
		}, {
		    "url": "https://www.vmovier.com",
		    "title": "场库",
		    "icon": require('./assets/img/icons/vmovier.svg')
		}, {
		    "url": "https://www.douban.com",
		    "title": "豆瓣",
		    "icon": require('./assets/img/icons/douban.svg')
		}, {
		    "url": "https://weread.qq.com",
		    "title": "微信读书",
		    "icon": require('./assets/img/icons/weread.svg')
		}, {
		    "url": "https://wx.zsxq.com/dweb",
		    "title": "知识星球",
		    "icon": require('./assets/img/icons/zsxq.svg')
		}, {
		    "url": "https://weibo.com",
		    "title": "微博",
		    "icon": require('./assets/img/icons/weibo.svg')
		}, {
		    "url": "https://wx.qq.com",
		    "title": "微信网页版",
		    "icon": require('./assets/img/icons/weixin.svg')
		}, {
		    "url": "https://qzone.qq.com",
		    "title": "QZone",
		    "icon": require('./assets/img/icons/qzone.svg')
		}, {
  			"url": "https://zhihu.com",
  			"title": "知乎",
  			"icon": require('./assets/img/icons/zhihu.svg')
		}, {
		    "url": "https://coolapk.com",
		    "title": "酷安",
		    "icon": require('./assets/img/icons/coolapk.svg')
		}, {
		    "url": "https://weixin.sogou.com",
		    "title": "搜狗微信",
		    "icon": require('./assets/img/icons/weixin-sogou.svg')
		}, {
		    "url": "https://www.britishcouncil.org",
		    "title": "British Council",
		    "icon": require('./assets/img/icons/britishcouncil.svg')
		}, {
		    "url": "https://www.tianfateng.cn",
		    "title": "田间小站",
		    "icon": require('./assets/img/icons/default.svg')
		}, {
		    "url": "https://tw.voicetube.com",
		    "title": "VoiceTube",
		    "icon": require('./assets/img/icons/voicetube.svg')
		}, {
		    "url": "https://meirishici.com",
		    "title": "每日诗词",
		    "icon": require('./assets/img/icons/meirishici.svg')
		}, {
		    "url": "https://www.gushiwen.org",
		    "title": "古诗文网",
		    "icon": require('./assets/img/icons/gushiwen.svg')
		}, {
        "url": "https://www.jinrishici.com",
        "title": "今日诗词",
        "icon": require('./assets/img/icons/jinrishici.svg')
    }, {
		    "url": "https://theme.npm.edu.tw/opendata",
		    "title": "故宮Open Data專區",
		    "icon": require('./assets/img/icons/npm-opendata.svg')
		}, {
		    "url": "https://www.dpm.org.cn",
		    "title": "故宫博物院",
		    "icon": require('./assets/img/icons/dpm.svg')
		}, {
			// 日本法隆寺金堂壁画数字网站，设计直观简洁，展示了20世纪初大火烧掉的7世纪壁画的高清图像。敦煌之外的唐代寺观壁画十分稀少，这里算是其中最重要的一批作品
		    "url": "https://view.horyuji-kondohekiga.jp",
		    "title": "法隆寺金堂壁画ガラス原板 デジタルビューア｜Glass Photographic Plates of the Murals in the Kondō Hall of Hōryūji Temple―Digital Viewer―",
		    "icon": require('./assets/img/icons/horyuji-kondohekiga.svg')
		}, {
		    "url": "https://www.wdl.org/zh",
		    "title": "世界数字图书馆主页",
		    "icon": require('./assets/img/icons/wdl.svg')
		}, {
		    "url": "https://luooqi.com",
		    "title": "鱼声音乐",
		    "icon": require('./assets/img/icons/luooqi.svg')
		}, {
		    "url": "https://songtasty.com/song",
		    "title": "SongTasty",
		    "icon": require('./assets/img/icons/songtasty.svg')
		}, {
		    "url": "https://musescore.org",
		    "title": "Musescore",
		    "icon": require('./assets/img/icons/musescore.svg')
		}, {
		    "url": "https://www.hqgq.com",
		    "title": "环球钢琴网",
		    "icon": require('./assets/img/icons/hqgq.svg')
		}, {
	  		"url": "https://www.everyonepiano.cn",
	  		"title": "人人钢琴网",
	  		"icon": require('./assets/img/icons/everyonepiano.svg')
	  }, {
		    "url": "https://www.exound.com",
		    "title": "人人都来玩音乐 | 叉烧网",
		    "icon": require('./assets/img/icons/exound.svg')
		}, {
	  		"url": "https://www.midifan.com",
	  		"title": "Midifan",
	  		"icon": require('./assets/img/icons/midifan.svg')
	  }, {
	  		"url": "https://www.midishow.com",
	  		"title": "MidiShow",
	  		"icon": require('./assets/img/icons/midishow.svg')
	  }, {
		    "url": "https://pod.link",
		    "title": "PodLink",
		    "icon": require('./assets/img/icons/podlink.svg')
		}, {
		    "url": "https://getpodcast.xyz",
		    "title": "播客 RSS Feed",
		    "icon": require('./assets/img/icons/getpodcast.svg')
		}, {
		    "url": "https://typlog.com/podlist/",
		    "title": "中文独立播客",
		    "icon": require('./assets/img/icons/podlist.svg')
		}, {
    		"url": "https://www.listennotes.com",
    		"title": "Listen Notes",
    		"icon": require('./assets/img/icons/listennotes.svg')
		}, {
        "url": "https://www.deepl.com/translator",
        "title": "DeepL Translator",
        "icon": require('./assets/img/icons/deepl.svg')
    }, {
        "url": "https://www.linguee.com",
        "title": "Linguee | Dictionary for German, French, Spanish, and more",
        "icon": require('./assets/img/icons/linguee.svg')
    }, {
  			// 一个词汇语法搜索引擎
  			"url": "https://linggle.com",
  			"title": "Linggle 10^12- Language Reference Search Engines - NLPLab",
  			"icon": require('./assets/img/icons/linggle.svg')
  	}, {
		    "url": "https://www.latexstudio.net",
		    "title": "LaTeX工作室",
		    "icon": require('./assets/img/icons/latexstudio.svg')
		}, {
		    "url": "https://www.amazon.com",
		    "title": "Amazon",
		    "icon": require('./assets/img/icons/amazon.svg')
		}, {
		    "url": "https://taobao.com",
		    "title": "淘宝",
		    "icon": require('./assets/img/icons/taobao.svg')
		}, {
		    "url": "https://getpocket.com",
		    "title": "Pocket",
		    "icon": require('./assets/img/icons/pocket.svg')
		}, {
		    "url": "https://www.dropbox.com",
		    "title": "Dropbox",
		    "icon": require('./assets/img/icons/dropbox.svg')
		}, {
  			"url": "https://business.yandex.ru/mail",
  			"title": "Yandex Mail",
  			"icon": require('./assets/img/icons/yandex-mail.svg')
		}, {
		    "url": "https://www.kylc.com",
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

// News & Information
var info_items = [
  {
	    "url": "https://news.ycombinator.com",
	    "title": "Hacker News",
	    "icon": require('./assets/img/icons/hacker-news.svg')
	}, {
	    "url": "https://hn.moonloss.com",
	    "title": "Nuxt HN",
	    "icon": require('./assets/img/icons/nuxt-hn.svg')
	}, {
			// 四大领域及内容：
			// - Morning Brew：晨酿，可以理解为早报；涉及（美）国内外政治新闻、股市经济、教育、运动、生活等多方面内容
			// - Emering Tech Brew：科技新闻；涉及科技企业、IPO 上市、人工智能、数码电子等内容
			// - Retail Brew：零售业新闻；涉及电子商务、房地产、零售经验与技巧等内容
			// - Marketing Brew：市场与营销新闻；涉及新营销策略、案例、广告创意封内容
			// 其中晨酿和科技新闻 Newsletters 在美国早晨（北京时间下午）定时推送，另两份则是在下午。晨酿每日一更，周日除外；而其余三份除周日停更外，每隔一天更新一次，大家可以分别订阅它们。我和主编们通过邮箱订阅了这些 Newsletters，大家如果不想订阅也可以直接在 Archive 中直接查看。订阅完全免费，但会在 Newsletters 插入一则 AD，处理得也比较优雅，个人认为不影响阅读。
			// Morning Brew 的 Slogan 是「Become smarter in just 5 minutes」，阅读后不见得一定能让人 smarter，但我们都很享受信息差被弥补的满足感。自留地主要关注数码科技新闻和流媒体信息，Morning Brew 则像一飞周报（财经向）一样，能够给我们的读者带来新领域的讯息。短短几分钟，可以了解一个大概，对于感兴趣的话题也有链接可供进一步了解。
  		"url": "https://www.morningbrew.com/emerging-tech/stories",
  		"title": "Morning Brew",
  		"icon": require('./assets/img/icons/morningbrew.svg')
	}, {
  		"url": "https://digg.com",
  		"title": "Digg",
  		"icon": require('./assets/img/icons/digg.svg')
	}, {
  		"url": "https://www.usatoday.com",
  		"title": "USA TODAY",
  		"icon": require('./assets/img/icons/usatoday.svg')
	}, {
  		"url": "https://fortune.com",
  		"title": "Fortune",
  		"icon": require('./assets/img/icons/fortune.svg')
	}, {
  		"url": "https://www.foxnews.com",
  		"title": "Foxnews",
  		"icon": require('./assets/img/icons/foxnews.svg')
	}, {
  		"url": "https://hk.appledaily.com",
  		"title": "蘋果日報",
  		"icon": require('./assets/img/icons/appledaily.svg')
	}, {
  		"url": "https://cn.nikkei.com",
  		"title": "日经中文网--日本经济新闻中文版",
  		"icon": require('./assets/img/icons/nikkei.svg')
	}, {
  		"url": "https://money.udn.com/money/index",
  		"title": "經濟日報",
  		"icon": require('./assets/img/icons/money-udn.svg')
	}, {
  		"url": "https://www.geekpark.net",
  		"title": "极客公园",
  		"icon": require('./assets/img/icons/geekpark.svg')
	}, {
  		"url": "https://wanqu.co",
  		"title": "湾区日报",
  		"icon": require('./assets/img/icons/wanqu.svg')
	}, {
  		"url": "https://japanjobs.dev",
  		"title": "Developer Jobs in Japan - A Job A Day Keeps The Doctor Away",
  		"icon": require('./assets/img/icons/japanjobs.svg')
	}, {
  		"url": "https://www.solidot.org",
  		"title": "Solidot: 奇客的资讯，重要的东西",
  		"icon": require('./assets/img/icons/solidot.svg')
	}, {
  		"url": "https://coolshell.cn",
  		"title": "酷壳",
  		"icon": require('./assets/img/icons/coolshell.svg')
	}, {
  		"url": "https://www.echojs.com",
  		"title": "Echo JS",
  		"icon": require('./assets/img/icons/echo-js.svg')
	}, {
  		"url": "https://weekly.75team.com",
  		"title": "奇舞周刊",
  		"icon": require('./assets/img/icons/75team.svg')
	}, {
  		"url": "http://www.qdaily.com",
  		"title": "好奇心日报",
  		"icon": require('./assets/img/icons/qdaily.svg')
	}, {
  		"url": "https://www.toodaylab.com",
  		"title": "理想生活实验室",
  		"icon": require('./assets/img/icons/toodaylab.svg')
	}, {
  		"url": "https://indiehacker.im",
  		"title": "Indie Hackers",
  		"icon": require('./assets/img/icons/indiehacker.svg')
	}, {
  		"url": "https://chengbao.bitcron.com",
  		"title": "城堡阅读周刊",
  		"icon": require('./assets/img/icons/chengbao.svg')
	}, {
  		"url": "https://www.zfrontier.com",
  		"title": "zFrontier 装备前线",
  		"icon": require('./assets/img/icons/zfrontier.svg')
	}, {
	    "url": "https://agirls.aotter.net",
	    "title": "電獺少女",
	    "icon": require('./assets/img/icons/agirls.svg')
	}, {
  		"url": "https://creatorsdaily.com",
  		"title": "创造者日报 - 让灵感完美爆炸",
  		"icon": require('./assets/img/icons/creatorsdaily.svg')
  }, {
  		"url": "https://iois.me",
  		"title": "Dailyio – 一份深度洞察和全球视野的科技商业评论",
  		"icon": require('./assets/img/icons/iois.svg')
  }, {
  		"url": "https://storystudio.tw",
  		"title": "故事 StoryStudio",
  		"icon": require('./assets/img/icons/storystudio.svg')
  }, {
  		"url": "https://cosx.org",
  		"title": "统计之都",
  		"icon": require('./assets/img/icons/cosx.svg')
	}, {
  		"url": "https://digitalimmigrant.org",
  		"title": "数字移民",
  		"icon": require('./assets/img/icons/digitalimmigrant.svg')
	}, {
  		"url": "https://kenengba.com",
  		"title": "可能吧",
  		"icon": require('./assets/img/icons/kenengba.svg')
  }, {
  		"url": "https://www.iyouport.org",
  		"title": "iYouPort - IYP 不是过眼云烟的新闻网站，我们提供实战能力，这里是值得您反复回看的档案室",
  		"icon": require('./assets/img/icons/iyouport.svg')
	}, {
  		"url": "https://itsfoss.com",
  		"title": "It's FOSS",
  		"icon": require('./assets/img/icons/itsfoss.svg')
	}, {
  		"url": "https://sspai.com",
  		"title": "少数派",
  		"icon": require('./assets/img/icons/sspai.svg')
	}, {
  		"url": "https://www.ithome.com.tw",
  		"title": "iThome | iThome Online 是臺湾第一个网路原生报，提供IT產业即时新闻、企业IT產品报导与测试、技术专题、IT应用报导、IT书讯，以及面向丰富的名家专栏",
  		"icon": require('./assets/img/icons/ithome-tw.svg')
  }, {
  		"url": "https://www.ithome.com",
  		"title": "IT之家 - 数码，科技，生活",
  		"icon": require('./assets/img/icons/ithome.svg')
  }, {
  		"url": "https://juejin.im",
  		"title": "掘金",
  		"icon": require('./assets/img/icons/juejin.svg')
	}, {
	    "url": "https://www.humblebundle.com",
	    "title": "Humble Bundle",
	    "icon": require('./assets/img/icons/humblebundle.svg')
	}, {
	    "url": "https://indienova.com",
	    "title": "indienova 独立游戏",
	    "icon": require('./assets/img/icons/indienova.svg')
	}, {
  		"url": "https://www.gcores.com",
  		"title": "机核 GCORES",
  		"icon": require('./assets/img/icons/gcores.svg')
	}, {
  		"url": "https://www.jiligame.com",
  		"title": "叽哩叽哩单机游戏",
  		"icon": require('./assets/img/icons/jiligame.svg')
	}, {
      "url": "https://keylol.com",
      "title": "其乐 Keylol - 驱动正版游戏的引擎！",
      "icon": require('./assets/img/icons/keylol.svg')
  }
];

// Community
var community_items = [
	{
  		"url": "https://krita-artists.org",
  		"title": "Krita Artists - Krita community forum",
  		"icon": require('./assets/img/icons/krita-artists.svg')
  }, {
  		"url": "https://labs.xda-developers.com",
  		"title": "XDA Labs",
  		"icon": require('./assets/img/icons/xdalabs.svg')
	}, {
      "url": "https://itch.io",
      "title": "itch.io",
      "icon": require('./assets/img/icons/itch-io.svg')
  }, {
  		"url": "https://www.newgrounds.com",
  		"title": "Newgrounds.com — Everything, By Everyone",
  		"icon": require('./assets/img/icons/newgrounds.svg')
  }, {
  		"url": "https://matters.news",
  		"title": "Matters",
  		"icon": require('./assets/img/icons/matters.svg')
	}, {
  		"url": "https://v2ex.com",
  		"title": "V2EX",
  		"icon": require('./assets/img/icons/v2ex.svg')
	}, {
  		"url": "https://www.freebuf.com",
  		"title": "FreeBuf网络安全行业门户",
  		"icon": require('./assets/img/icons/freebuf.svg')
	}, {
  		"url": "https://www.nowcoder.com",
  		"title": "牛客网",
  		"icon": require('./assets/img/icons/nowcoder.svg')
	}, {
  		"url": "https://segmentfault.com",
  		"title": "SegmentFault",
  		"icon": require('./assets/img/icons/segmentfault.svg')
	}, {
  		"url": "https://liqi.io",
  		"title": "利器",
  		"icon": require('./assets/img/icons/liqi.svg')
	}, {
  		"url": "https://4think.net",
  		"title": "4THINK | 為增進思考而閱讀",
  		"icon": require('./assets/img/icons/4think.svg')
	}, {
  		"url": "https://www.cup.com.hk",
  		"title": "*CUP - 每日十條世界要聞 與你清醒同行",
  		"icon": require('./assets/img/icons/cup.svg')
	}, {
  		"url": "https://ld246.com",
  		"title": "链滴",
  		"icon": require('./assets/img/icons/ld246.svg')
	}, {
  		"url": "https://www.zcfy.cc",
  		"title": "众成翻译",
  		"icon": require('./assets/img/icons/zcfy.svg')
	}, {
  		"url": "https://github.com/xitu/gold-miner",
  		"title": "掘金翻译",
  		"icon": require('./assets/img/icons/juejin.svg')
	}, {
  		"url": "http://g.yeeyan.org",
  		"title": "译言古登堡计划",
  		"icon": require('./assets/img/icons/yeeyan.svg')
	}

];

// Documentary & Travel vlog
var documentary_travel_items = [
	{
  		"url": "http://www.sao.com",
  		"title": "SAO",
  		"icon": require('./assets/img/icons/sao.svg')
	}, {
  		"url": "https://rocumentaries.com",
  		"title": "Rocumentaries — Watch the best documentaries online",
  		"icon": require('./assets/img/icons/rocumentaries.svg')
	}, {
  		"url": "https://vdianying.cc",
  		"title": "唯电影",
  		"icon": require('./assets/img/icons/vdianying.svg')
	}, {
  		"url": "https://v.qq.com/x/channel/doco",
  		"title": "腾讯视频纪录片频道",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "http://jishi.cctv.com",
  		"title": "CCTV 纪实频道",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://www.bilibili.com/documentary",
  		"title": "Bilibili 纪录片频道",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://www.douban.com/doulist/223273/",
  		"title": "豆瓣豆列",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://www.onehourlife.com",
  		"title": "每天一小时纪录片",
  		"icon": require('./assets/img/icons/onehourlife.svg')
	}, {
	    "url": "https://xiongmaopan.com",
	    "title": "熊猫盘纪录片|推荐好看的纪录片",
	    "icon": require('./assets/img/icons/xiongmaopan.svg')
  }, {
  		"url": "http://vagaband.blog.sohu.com",
  		"title": "流浪者",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
	    "url": "https://immian.com",
	    "title": "巷子內的生活，國內外美食旅遊隨筆",
	    "icon": require('./assets/img/icons/immian.svg')
  }, {
  		"url": "https://www.mafengwo.cn",
  		"title": "马蜂窝",
  		"icon": require('./assets/img/icons/mafengwo.svg')
	}

];

// Coding
var coding_items = [
  {
  		"url": "https://repl.it",
  		"title": "Repl.it",
  		"icon": require('./assets/img/icons/repl.svg')
	}, {
			"url": "https://codesandbox.io",
			"title": "CodeSandbox",
			"icon": require('./assets/img/icons/codesandbox.svg')
	}, {
	    "url": "https://colab.research.google.com",
	    "title": "Colaboratory",
	    "icon": require('./assets/img/icons/colaboratory.svg')
  }, {
      "url": "https://deepnote.com",
      "title": "Deepnote - Data science notebook for teams",
      "icon": require('./assets/img/icons/deepnote.svg')
  }, {
  		"url": "https://www.tutorialspoint.com/execute_bash_online.php",
  		"title": "Bash Online",
  		"icon": require('./assets/img/icons/bash-online.svg')
	}, {
  		"url": "https://astexplorer.net",
  		"title": "AST explorer",
  		"icon": require('./assets/img/icons/astexplorer.svg')
	}, {
	    "url": "https://godbolt.org",
	    "title": "Compiler Explorer",
	    "icon": require('./assets/img/icons/godbolt.svg')
  }, {
  		"url": "https://visualgo.net/zh",
  		"title": "Visualgo",
  		"icon": require('./assets/img/icons/visualgo.svg')
	}, {
  		"url": "https://leetcode.com",
  		"title": "LeetCode",
  		"icon": require('./assets/img/icons/leetcode.svg')
	}, {
  		"url": "https://leetcode-cn.com",
  		"title": "力扣(LeetCode)",
  		"icon": require('./assets/img/icons/leetcode.svg')
	}, {
  		"url": "https://www.lintcode.com/zh-cn",
  		"title": "LintCode",
  		"icon": require('./assets/img/icons/lintcode.svg')
	}, {
  		"url": "https://www.hihocoder.com",
  		"title": "hihoCoder",
  		"icon": require('./assets/img/icons/hiho.svg')
	}, {
  		"url": "https://www.spoj.com",
  		"title": "SPOJ",
  		"icon": require('./assets/img/icons/spoj.svg')
	}

];

// Course
var course_items = [
	{
  		"url": "https://www.imooc.com",
  		"title": "慕课网",
  		"icon": require('./assets/img/icons/imooc.svg')
	}, {
  		"url": "https://time.geekbang.org",
  		"title": "极客时间",
  		"icon": require('./assets/img/icons/timegeekbang.svg')
	}, {
  		/* 
  		 * Schoo 是日本最大的 MOOC 网站，全部课程都是日语授课，
  		 * 科技趋势、经营创业、商业技巧等是主要的课程内容，
  		 * 网站受众也以职场新鲜人为主，一些课程限定付费会员才能观看，日语学习者可以考虑学习
  		*/
  		"url": "https://schoo.jp",
  		"title": "Schoo - 大人たちがずっと学び続ける生放送コミュニティ",
  		"icon": require('./assets/img/icons/schoo.svg')
	}, {
  		"url": "https://uiiiuiii.com",
  		"title": "优优教程网",
  		"icon": require('./assets/img/icons/uiiiuiii.svg')
	}, {
  		"url": "https://www.shiyanlou.com",
  		"title": "实验楼",
  		"icon": require('./assets/img/icons/shiyanlou.svg')
	}, {
  		"url": "https://www.tutorialspoint.com",
  		"title": "TutorialSpoint",
  		"icon": require('./assets/img/icons/tutorialspoint.svg')
	}, {
  		"url": "https://www.w3schools.com",
  		"title": "W3Schools",
  		"icon": require('./assets/img/icons/w3schools.svg')
	}, {
  		"url": "https://www.w3cplus.com",
  		"title": "w3cplus",
  		"icon": require('./assets/img/icons/w3cplus.svg')
	}, {
		  // 一个在线公开课课程的网站，目前可搜索51163门在线课程，大部分可免费学习
  		"url": "https://www.coursade.com",
  		"title": "Coursade - Discover online learning",
  		"icon": require('./assets/img/icons/coursade.svg')
	}, {
  		"url": "http://open.nlc.cn/onlineedu/client/index.htm",
  		"title": "国图公开课",
  		"icon": require('./assets/img/icons/open-nlc.svg')
	}, {
  		"url": "http://opencourse.pku.edu.cn/course/opencourse2/index.html",
  		"title": "北京大学公开课",
  		"icon": require('./assets/img/icons/default.svg')
	}

];

// Design
var design_items = [
	{
  		"url": "https://www.behance.net",
  		"title": "Behance",
  		"icon": require('./assets/img/icons/behance.svg')
	}, {
  		"url": "https://dribbble.com",
  		"title": "Dribbble",
  		"icon": require('./assets/img/icons/dribbble.svg')
	}, {
  		"url": "https://www.pinterest.com",
  		"title": "Pinterest",
  		"icon": require('./assets/img/icons/pinterest.svg')
	}, {
  		"url": "https://www.artstation.com",
  		"title": "Artstation",
  		"icon": require('./assets/img/icons/artstation.svg')
	}, {
  		"url": "https://www.ui.cn",
  		"title": "UI中国",
  		"icon": require('./assets/img/icons/ui-cn.svg')
	}, {
  		"url": "https://www.uisdc.com",
  		"title": "优设",
  		"icon": require('./assets/img/icons/uisdc.svg')
	}, {
  		"url": "https://www.deviantart.com",
  		"title": "Deviantart",
  		"icon": require('./assets/img/icons/deviantart.svg')
	}, {
  		"url": "https://webkul.github.io/coolhue",
  		"title": "coolHue",
  		"icon": require('./assets/img/icons/coolhue.svg')
	}, {
  		"url": "https://tgideas.qq.com",
  		"title": "TGideas",
  		"icon": require('./assets/img/icons/tgideas.svg')
	}, {
  		"url": "https://mockuper.net",
  		"title": "Mockuper",
  		"icon": require('./assets/img/icons/mockuper.svg')
	}, {
  		"url": "https://stubborn.fun",
  		"title": "Stubborn - Free Illustrations Generator",
  		"icon": require('./assets/img/icons/stubborn.svg')
	}, {
  		"url": "https://illlustrations.co",
  		"title": "illlustrations - open source illustrations kit",
  		"icon": require('./assets/img/icons/illlustrations.svg')
	}, {
  		"url": "https://app.itg.digital",
  		"title": "ITG.Builder — Start Creating Your Cool Illustrations",
  		"icon": require('./assets/img/icons/itg.svg')
	}, {
  		"url": "https://www.manypixels.co/gallery",
  		"title": "illlustrations - open source illustrations kit",
  		"icon": require('./assets/img/icons/manypixels.svg')
	}, {
  		"url": "https://beautifulwebtype.com",
  		"title": "In-Depth Guide to the Best Free Fonts • Beautiful Web Type",
  		"icon": require('./assets/img/icons/beautifulwebtype.svg')
	}, {
  		"url": "https://figmachina.com",
  		"title": "FigmaChina：Figma 中文网，学习 Figma 从这里开始",
  		"icon": require('./assets/img/icons/figmachina.svg')
	}

];

// Publishing & Book
var publishing_book_items = [
	{
  		"url": "https://www.packtpub.com",
  		"title": "Packtpub",
  		"icon": require('./assets/img/icons/packtpub.svg')
	}, {
  		"url": "https://www.manning.com",
  		"title": "Manning",
  		"icon": require('./assets/img/icons/manning.svg')
	}, {
	    "url": "https://leanpub.com",
	    "title": "Leanpub",
	    "icon": require('./assets/img/icons/leanpub.svg')
	}, {
	    "url": "https://www.ituring.com.cn",
	    "title": "图灵社区",
	    "icon": require('./assets/img/icons/ituring.svg')
	}, {
	    "url": "https://www.epubit.com",
	    "title": "异步社区",
	    "icon": require('./assets/img/icons/epubit.svg')
	}, {
    	"url": "https://www.oreilly.com",
	    "title": "O'Reilly Media",
	    "icon": require('./assets/img/icons/oreilly.svg')
	}, {
  		"url": "https://www.zjlib.cn",
  		"title": "浙江图书馆",
  		"icon": require('./assets/img/icons/zjlib.svg')
	}, {
  		"url": "http://wap.gxlib.org/ermsClient/browse.do",
  		"title": "广西壮族自治区图书馆 | 电子资源平台",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://new.shuge.org",
  		"title": "书格",
  		"icon": require('./assets/img/icons/shuge.svg')
	}, {
  		"url": "https://bookfere.com",
  		"title": "书伴",
  		"icon": require('./assets/img/icons/bookfere.svg')
	}, {
  		"url": "https://www.gutenberg.org",
  		"title": "古登堡计划",
  		"icon": require('./assets/img/icons/gutenberg.svg')
	}, {
  		"url": "https://www.planetebook.com",
  		"title": "Planet eBook",
  		"icon": require('./assets/img/icons/planetebook.svg')
	}, {
  		"url": "https://itbook.download",
  		"title": "Itbook",
  		"icon": require('./assets/img/icons/itbook.svg')
	}, {
	    "url": "http://cn.epubee.com/books",
	    "title": "ePUBee 书库",
	    "icon": require('./assets/img/icons/epubee.svg')
 	}, {
  		"url": "https://www.jiumodiary.com",
  		"title": "鸠摩搜索",
  		"icon": require('./assets/img/icons/jiumodiary.svg')
	}, {
  		"url": "https://lib.yufan.me",
  		"title": "观海阁",
  		"icon": require('./assets/img/icons/libyufan.svg')
	}, {
	    "url": "https://booksc.org", 
	    "title": "BookSC",  
	    "icon": require('./assets/img/icons/booksc.svg')
  }, {
	    "url": "https://www.letmeread.net", 
	    "title": "Let Me Read » Best Books to Read in a Lifetime",  
	    "icon": require('./assets/img/icons/letmeread.svg')
  }, {
  		"url": "https://b-ok.xyz",
  		"title": "Electronic library",  // mirror: https://b-ok.cc
  		"icon": require('./assets/img/icons/b-ok.svg')
	}, {
  		"url": "http://gen.lib.rus.ec",
  		"title": "Library Genesis", // Libgen
  		"icon": require('./assets/img/icons/libgen.svg')
	}, {
  		// 有很多 Libgen 上都没有的学术著作 pdf 下载，很多都是新书.
  		"url": "https://oapen.org",
  		"title": "Online Library and Publication Platform | OAPEN", 
  		"icon": require('./assets/img/icons/oapen.svg')
	}, {
  		"url": "https://ebook.huzerui.com",
  		"title": "熊猫搜书",
  		"icon": require('./assets/img/icons/panda-search.svg')
	}, {
      "url": "https://ebook2.lorefree.com",
      "title": "LoreFree-去中心化免费电子书共享社区",
      "icon": require('./assets/img/icons/lorefree.svg')
  }, {
  		"url": "https://epubw.com",
  		"title": "ePUBw",
  		"icon": require('./assets/img/icons/epubw.svg')
	}, {
  		"url": "https://salttiger.com",
  		"title": "SaltTiger | 每天一本编程书，每天进步一点点",
  		"icon": require('./assets/img/icons/salttiger.svg')
	}, {
  		"url": "https://ctext.org",
  		"title": "中国哲学书籍电子化计划",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://www.gujiguan.com/index.aspx",
  		"title": "古籍馆-中国最大的古籍图书馆",
  		"icon": require('./assets/img/icons/gujiguan.svg')
	}, {
	    "url": "https://www.neohytung.com",
	    "title": "瀚堂近代报刊数据库",
	    "icon": require('./assets/img/icons/neohytung.svg')
  }, {
  		"url": "https://book.douban.com",
  		"title": "豆瓣读书",
  		"icon": require('./assets/img/icons/douban.svg')
	}, {
  		"url": "https://manybooks.net",
  		"title": "Manybooks",
  		"icon": require('./assets/img/icons/manybooks.svg')
	}, {
  		"url": "http://www.qcenglish.com",
  		"title": "七彩英语",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
	    "url": "https://www.tianfateng.cn/tag/magazine",
	    "title": "原版英文杂志 - 田间小站",
	    "icon": require('./assets/img/icons/default.svg')
 	}, {
	    "url": "https://www.pdfdrive.com",
	    "title": "PDF Drive - Search and download PDF files for free.",
	    "icon": require('./assets/img/icons/pdfdrive.svg')
 	}, {
 		// 在线免费阅读和下载电子书
	    "url": "https://www.classicly.com",
	    "title": "Read free books online in PDF, Kindle & ePub",
	    "icon": require('./assets/img/icons/default.svg')
 	}, {
	    "url": "https://duzhege.cn",
	    "title": "读者阁",
	    "icon": require('./assets/img/icons/duzhege.svg')
  }, {
  		"url": "https://www.enjing.com",
  		"title": "恩京的书房",
  		"icon": require('./assets/img/icons/enjing.svg')
	}, {
	    "url": "https://www.kgbook.com",
	    "title": "苦瓜书盘",
	    "icon": require('./assets/img/icons/default.svg')
  }, {
	    "url": "https://yabook.org",
	    "title": "雅书 - PDF电子书学习下载站",
	    "icon": require('./assets/img/icons/yabook.svg')
  }, {
	    "url": "https://hdpdf.blog",
	    "title": "高清PDF电子书分享 – 万卷PDF扫描版电子书免费下载",
	    "icon": require('./assets/img/icons/hdpdf.svg')
  }, {
  		"url": "https://ebook.ipfs-lab.com",
  		"title": "Ebook",
  		"icon": require('./assets/img/icons/ebook.svg')
	}, {
  		// 一个收录各种优质程序书籍的网站，还在不断丰富中…… 
  		"url": "https://www.best-books.dev",
  		"title": "The best Programming books",
  		"icon": require('./assets/img/icons/best-books.svg')
	}, {
  		"url": "http://bestcbooks.com",
  		"title": "计算机书籍控",
  		"icon": require('./assets/img/icons/bestcbooks.svg')
	}, {
  		"url": "http://www.haodoo.net",
  		"title": "好读",
  		"icon": require('./assets/img/icons/haodoo.svg')
	}, {
  		"url": "http://audiobookbay.nl",
  		"title": "AudioBookBay",
  		"icon": require('./assets/img/icons/audiobookbay.svg')
	}

];

// Academic
var academic_items = [
	{
  		"url": "https://journals.sagepub.com",
  		"title": "SAGE Journals: Your gateway to world-class research journals",
  		"icon": require('./assets/img/icons/sagepub.svg')
	}, {
  		"url": "https://www.sciencedirect.com",
  		"title": "ScienceDirect.com | Science, health and medical journals, full text articles and books.",
  		"icon": require('./assets/img/icons/sciencedirect.svg')
	}, {
    	"url": "https://zenodo.org",
	    "title": "Zenodo - Research. Shared.",
	    "icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://sci-hub.tw",
  		"title": "Sci-Hub: removing barriers in the way of science",
  		"icon": require('./assets/img/icons/sci-hub.svg')
	}, {
  		"url": "https://lunwen.im",
  		"title": "喵咪论文",
  		"icon": require('./assets/img/icons/lunwen.svg')
	}, {
  		// 此文库分为15个学科专辑，覆盖自然科学、工程与技术科学、人文与社会科学、医药科学、农业科学五大门类的所有一级学科，所有图书按标准学科和中图法两个体系进行分类。包括专著、教材、图集、报告、工具书、大众科普等，满足科研、教学、管理等各个系列的专业用户。几乎囊括科学出版社60余年来所有获奖作品、院士著作、重点丛书、各学科必备经典专著等，堪称“科学宝库、数字典藏”
  		"url": "http://book.sciencereading.cn",
  		"title": "科学文库",
  		"icon": require('./assets/img/icons/sciencereading.svg')
	}, {
  		// 库问搜索免费提供超过千万开源学术论文资源检索和下载，涵盖宗教哲学、社会科学、政治法律、军事经济、文化教育、文学艺术、历史地理、IT信息、自然科学、生物医...
  		"url": "http://www.koovin.com",
  		"title": "库问搜索 - 打造免费开源文献资源共享平台",
  		"icon": require('./assets/img/icons/koovin.svg')
	}

];

// 工具
var tool_items = [
	{
	    "url": "https://csrankings.org",
	    "title": "CSRankings: Computer Science Rankings",
	    "icon": require('./assets/img/icons/csrankings.svg')
	}, {
      "url": "https://web.baimiaoapp.com",
      "title": "白描网页版 - 在线OCR文字识别、图片文字提取",
      "icon": require('./assets/img/icons/baimiaoapp.svg')
  }, {
  		"url": "https://www.onlineocr.net",
  		"title": "Online OCR",
  		"icon": require('./assets/img/icons/onlineocr.svg')
	}, {
  		"url": "https://codefence.io",
  		"title": "codefence - an easily embeddable interactive code editor",
  		"icon": require('./assets/img/icons/codefence.svg')
	}, {
	    "url": "https://www.ankitube.com",
	    "title": "Anki | 一键生成听力卡 音频听力 Youtube 油管牌组",
	    "icon": require('./assets/img/icons/default.svg')
  }, {
	    "url": "https://latexbase.com",
	    "title": "LaTeX Base | Online LaTeX Editor and Compiler",
	    "icon": require('./assets/img/icons/latexbase.svg')
  }, {
	    "url": "https://www.freeformatter.com",
	    "title": "Free Online Tools For Developers - FreeFormatter.com",
	    "icon": require('./assets/img/icons/freeformatter.svg')
  }, {
  		"url": "https://unicode-table.com",
  		"title": "Unicode 字符百科",
  		"icon": require('./assets/img/icons/unicode.svg')
	}, {
  		"url": "https://image.online-convert.com",
  		"title": "Online image converter",
  		"icon": require('./assets/img/icons/online-converter.svg')
	}, {
  		"url": "https://codebeautify.org",
  		"title": "Free Online Tools For Developers - to Beautify, Validate, Minify, Analyse, Convert JSON, XML, JavaScript, CSS, HTML, Excel",
  		"icon": require('./assets/img/icons/codebeautify.svg')
	}, {
  		"url": "https://www.favicon.cc",
  		"title": "favicon Generator",
  		"icon": require('./assets/img/icons/favicon-generator.svg')
	}, {
  		"url": "http://asciiflow.com",
  		"title": "ASCIIFlow",
  		"icon": require('./assets/img/icons/asciiflow.svg')
	}, {
  		"url": "https://asciinema.org",
  		"title": "asciinema - Record and share your terminal sessions, the right way",
  		"icon": require('./assets/img/icons/asciinema.svg')
	}, {
  		"url": "https://sketch.io/sketchpad",
  		"title": "Sketchpad",
  		"icon": require('./assets/img/icons/sketchpad.svg')
	}, {
  		"url": "https://ping.chinaz.com",
  		"title": "Ping 检测",
  		"icon": require('./assets/img/icons/chinaz.svg')
	}, {
  		"url": "https://www.ipip.net",
  		"title": "IPIP.NET",
  		"icon": require('./assets/img/icons/ipip.svg')
	}, {
  		"url": "https://uptimerobot.com",
  		"title": "Uptime Robot",
  		"icon": require('./assets/img/icons/uptime-robot.svg')
	}, {
  		"url": "https://realfavicongenerator.net",
  		"title": "Favicon Generator for perfect icons on all browsers",
  		"icon": require('./assets/img/icons/realfavicongenerator.svg')
	}, {
  		"url": "https://code2flow.com",
  		"title": "code2flow",
  		"icon": require('./assets/img/icons/code2flow.svg')
	}, {
  		"url": "https://www.iloveimg.com",
  		"title": "iLoveIMG",
  		"icon": require('./assets/img/icons/iloveimg.svg')
	}, {
  		"url": "https://browserframe.com",
  		"title": "BrowserFrame",
  		"icon": require('./assets/img/icons/browserframe.svg')
	}, {
  		"url": "https://cn.office-converter.com",
  		"title": "Office-converter",
  		"icon": require('./assets/img/icons/office-converter.svg')
	}, {
  		"url": "https://www.wolframalpha.com",
  		"title": "WolframAlpha",
  		"icon": require('./assets/img/icons/wolframalpha.svg')
	}, {
  		"url": "https://www.kuaidi100.com",
  		"title": "快递100",
  		"icon": require('./assets/img/icons/kuaidi100.svg')
	}, {
  		"url": "https://explainshell.com",
  		"title": "ExplainShell",
  		"icon": require('./assets/img/icons/explainshell.svg')
	}, {
  		"url": "https://gitpitch.com",
  		"title": "GitPitch",
  		"icon": require('./assets/img/icons/gitpitch.svg')
	}, {
  		"url": "https://audio.rip",
  		"title": "Audio Rip",
  		"icon": require('./assets/img/icons/audio-rip.svg')
	}, {
  		"url": "https://www.remove.bg",
  		"title": "Remove Background from Image",
  		"icon": require('./assets/img/icons/remove-bg.svg')
	}, {
  		"url": "https://devdocs.io",
  		"title": "DevDocs API Documentation",
  		"icon": require('./assets/img/icons/devdocs.svg')
	}, {
  		"url": "https://carbon.now.sh",
  		"title": "Carbon",
  		"icon": require('./assets/img/icons/carbon.svg')
	}, {
  		"url": "http://chartmage.com/intro.html",
  		"title": "Chart Mage",
  		"icon": require('./assets/img/icons/chartmage.svg')
	}, {
  		"url": "https://www.osboxes.org",
  		"title": "OSBoxes",
  		"icon": require('./assets/img/icons/osboxes.svg')
	}, {
  		"url": "https://www.parsevideo.com",
  		"title": "视频解析网",
  		"icon": require('./assets/img/icons/parsevideo.svg')
	}, {
  		"url": "https://avogadr.io",
  		"title": "Molecular Wallpaper Generator",
  		"icon": require('./assets/img/icons/avogadr.svg')
	}, {
  		"url": "https://papersizes.io",
  		"title": "Paper Sizes",
  		"icon": require('./assets/img/icons/papersizes.svg')
	}, {
  		"url": "https://opencc.byvoid.com",
  		"title": "開放中文轉換",
  		"icon": require('./assets/img/icons/occ.svg')
	}, {
  		"url": "https://online.easyscreenocr.com",
  		"title": "Free Online Image OCR - EasyScreenOCR",
  		"icon": require('./assets/img/icons/easyscreenocr.svg')
	}, {
  		"url": "https://www.nirsoft.net",
  		"title": "NirSoft",
  		"icon": require('./assets/img/icons/nirsoft.svg')
	}, {
  		"url": "https://randomkeygen.com",
  		"title": "RandomKeygen",
  		"icon": require('./assets/img/icons/randomkeygen.svg')
	}, {
  		"url": "http://www.tlhiv.org/rast2vec",
  		"title": "Rast2Vec",
  		"icon": require('./assets/img/icons/rast2vec.svg')
	}, {
  		"url": "https://regex101.com",
  		"title": "regex101",
  		"icon": require('./assets/img/icons/regex101.svg')
	}, {
  		"url": "https://squoosh.app",
  		"title": "Squoosh",
  		"icon": require('./assets/img/icons/squoosh.svg')
	}, {
  		"url": "https://www.draw.io",
  		"title": "Draw",
  		"icon": require('./assets/img/icons/draw.svg')
	}, {
  		"url": "https://www.channelshunt.com",
  		"title": "ChannelsHunt",
  		"icon": require('./assets/img/icons/channelshunt.svg')
	}, {
  		"url": "https://www.findyoutube.net",
  		"title": "FindYoutube",
  		"icon": require('./assets/img/icons/findyoutube.svg')
	}, {
  		"url": "https://dbdiagram.io/home",
  		"title": "dbdiagram",
  		"icon": require('./assets/img/icons/dbdiagram.svg')
	}, {
  		"url": "https://mybinder.org",
  		"title": "Binder",
  		"icon": require('./assets/img/icons/binder.svg')
	}, {
  		"url": "https://ip-api.io",
  		"title": "IP-API",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://www.geogebra.org",
  		"title": "GeoGebra | Free Math Apps",
  		"icon": require('./assets/img/icons/geogebra.svg')
	}, {
  		"url": "https://kroki.io",
  		"title": "Kroki!",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://duilian.msra.cn",
  		"title": "微软对联",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://colorkitty.com",
  		"title": "ColorKitty - Find the perfect color palettes from pictures.",
  		"icon": require('./assets/img/icons/colorkitty.svg')
	}, {
	    "url": "https://gitmind.cn",
	    "title": "GitMind - 在线免费思维导图软件",
	    "icon": require('./assets/img/icons/gitmind.svg')
	}, {
  		"url": "https://www.faxin.cn/keyword/index.aspx",
  		"title": "法信大纲 - 法信 - 懂法，更懂法律人",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://apkcombo.com",
  		"title": "APKCombo | APK Downloader",
  		"icon": require('./assets/img/icons/apkcombo.svg')
	}, {
  		"url": "https://worldofviruses.unl.edu",
  		"title": "Biology of Human/World of Viruses",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://www.hoverstat.es",
  		"title": "HOVERSTAT.ES | The home of alternative web-design.",
  		"icon": require('./assets/img/icons/hoverstat.svg')
	}, {
  		"url": "https://time.is",
  		"title": "Time.is",
  		"icon": require('./assets/img/icons/timeis.svg')
	}, {
  		"url": "https://gitexplorer.com",
  		"title": "Git Explorer",
  		"icon": require('./assets/img/icons/gitexplorer.svg')
	}, {
	    "url": "https://dnsspy.io",
	    "title": "DNS Spy",
	    "icon": require('./assets/img/icons/dnsspy.svg')
	}, {
	    "url": "https://www.mail-tester.com",
	    "title": "Newsletters spam test by mail-tester.com",
	    "icon": require('./assets/img/icons/mail-tester.svg')
  }, {
	    "url": "https://bcrypt-generator.com",
	    "title": "Bcrypt-Generator.com - Online Bcrypt Hash Generator & Checker",
	    "icon": require('./assets/img/icons/bcrypt-generator.svg')
  }, {
	    "url": "https://ssl-config.mozilla.org",
	    "title": "Mozilla SSL Configuration Generator",
	    "icon": require('./assets/img/icons/default.svg')
	}, {
	    "url": "https://www.namemesh.com",
	    "title": "Domain Name Generator For Perfectionists",
	    "icon": require('./assets/img/icons/namemesh.svg')
  }, {
	    "url": "https://www.domcomp.com",
	    "title": "Domain Name Price and Availability",
	    "icon": require('./assets/img/icons/domcomp.svg')
  }, {
	    "url": "https://namebeta.com",
	    "title": "NameBeta: 国际域名搜索 | 域名注册 | 国别域名注册 | 域名比价",
    	"icon": require('./assets/img/icons/namebeta.svg')
  }, {
	    "url": "https://zh-hans.tld-list.com",
	    "title": "比较所有顶级域名的价格 | TLD List",
	    "icon": require('./assets/img/icons/tld-list.svg')
  }, {
	    "url": "https://www.iana.org/assignments/media-types/media-types.xhtml",
	    "title": "Media Types",
	    "icon": require('./assets/img/icons/media-types.svg')
  }, {
  		"url": "https://www.flightradar24.com",
  		"title": "Flightradar24",
  		"icon": require('./assets/img/icons/flightradar24.svg')
	}, {
	    "url": "https://readhacker.news",
	    "title": "Read Hacker News",
	    "icon": require('./assets/img/icons/readhackernews.svg')
	}, {
		  // 将任意一个网页链接放在这个网站都可以启动 Bionic Reading 阅读模式，还能将转换后的样式下载 为Epub 或 PDF.
	    "url": "https://bionic-reading.com/en/",
	    "title": "A higher dimension of reading. - Bionic Reading",
	    "icon": require('./assets/img/icons/bionic-reading.svg')
	}, {
		  // Create 3D plots out of paper.
	    "url": "https://felixboiii.github.io/paper-plotter/",
	    "title": "Paper plotter",
	    "icon": require('./assets/img/icons/paper-plotter.svg')
	}, {
  		"url": "https://cssreference.io",
  		"title": "CSS Reference",
  		"icon": require('./assets/img/icons/css-reference.svg')
	}, {
  		"url": "https://htmlreference.io",
  		"title": "HTML Reference",
  		"icon": require('./assets/img/icons/html-reference.svg')
	}, {
  		"url": "https://openmoji.org",
  		"title": "OpenMoji",
  		"icon": require('./assets/img/icons/openmoji.svg')
	}

];


// Pictures & images
var pictures_items = [
  {
  		"url": "https://imgur.com",
  		"title": "imgur",
  		"icon": require('./assets/img/icons/imgur.svg')
	}, {
  		"url": "https://www.flickr.com",
  		"title": "Flickr",
  		"icon": require('./assets/img/icons/flickr.svg')
	}, {
  		"url": "https://sm.ms",
  		"title": "SM.MS",
  		"icon": require('./assets/img/icons/smms.svg')
	}, {
  		"url": "https://www.z4a.net",
  		"title": "Z4A图床",
  		"icon": require('./assets/img/icons/z4a.svg')
	}, {
      "url": "https://wallpaperhub.app",
      "title": "WallpaperHub | Free wallpapers for your PC, phone and tablet",
      "icon": require('./assets/img/icons/wallpaperhub.svg')
  }, {
  		// 收集古典艺术品影像资料的网站，支持免费下载使用。
  		"url": "https://artvee.com",
  		"title": "Artvee",
  		"icon": require('./assets/img/icons/artvee.svg')
	}, {
  		"url": "https://unsplash.com",
  		"title": "Unsplash",
  		"icon": require('./assets/img/icons/unsplash.svg')
	}, {
  		"url": "https://500px.com",
  		"title": "500px",
  		"icon": require('./assets/img/icons/500.svg')
	}, {
  		"url": "https://bing.ioliu.cn",
  		"title": "必应壁纸",
  		"icon": require('./assets/img/icons/bing.svg')
	}, {
  		"url": "https://windows10spotlight.com",
  		"title": "Windows 10 Spotlight Images",
  		"icon": require('./assets/img/icons/windows10spotlight.svg')
	}, {
  		"url": "https://www.novapattern.com",
  		"title": "Novapattern",
  		"icon": require('./assets/img/icons/novapattern.svg')
	}, {
  		"url": "http://pngimg.com",
  		"title": "PNG images with transparent background",
  		"icon": require('./assets/img/icons/pngimg.svg')
	}, {
  		"url": "https://www.hppic.com",
  		"title": "嗬品 | 小清新简约手机壁纸",
  		"icon": require('./assets/img/icons/hppic.svg')
	}, {
  		"url": "https://wallroom.io",
  		"title": "HD/4K/5K Resolution Wallpapers/Backgrounds",
  		"icon": require('./assets/img/icons/wallroom.svg')
	}, {
  		"url": "https://wall.alphacoders.com",
  		"title": "Wallpaper Abyss - HD Wallpapers, Background Images",
  		"icon": require('./assets/img/icons/wallalphacoders.svg')
	}, {
  		"url": "https://www.freepik.com",
  		"title": "Freepik | Graphic Resources for everyone",
  		"icon": require('./assets/img/icons/freepik.svg')
	}, {
  		"url": "https://best-wallpaper.net",
  		"title": "Best Wallpaper | Free and Best High Quality 2K 4K 5K 8K HD UHD Desktop Wallpapers & iPhone 11 Pro XS Max XR 8 7 6 Plus Wallpapers.",
  		"icon": require('./assets/img/icons/best-wallpaper.svg')
	}, {
  		"url": "https://himawari8.nict.go.jp",
  		"title": "向日葵-8号",
  		"icon": require('./assets/img/icons/himawari8.svg')
	}
];

// Blog
var blog_items = [
	{
  		"url": "https://github.com/timqian/chinese-independent-blogs",
  		"title": "中文独立博客列表",
  		"icon": require('./assets/img/icons/default.svg')
	}, {
  		"url": "https://blog.spoongraphics.co.uk",
  		"title": "Spoon Graphics",
  		"icon": require('./assets/img/icons/spoongraphics.svg')
	}, {
  		"url": "http://www.ruanyifeng.com/blog",
  		"title": "阮一峰的网络日志",
  		"icon": require('./assets/img/icons/ruanyifeng.svg')
	}, {
  		"url": "https://vitzy.me",
  		"title": "True Me",
  		"icon": require('./assets/img/icons/true-me.svg')
	}, {
  		"url": "https://www.moonloss.com",
  		"title": "MoonLoss",
  		"icon": require('./assets/img/icons/moonloss.svg')
	}, {
  		"url": "https://zty.js.org",
  		"title": "ZTY",
  		"icon": require('./assets/img/icons/zty.svg')
	}, {
  		"url": "https://lepture.com",
  		"title": "Just lepture",
  		"icon": require('./assets/img/icons/lepture.svg')
	}, {
  		"url": "https://jesor.me",
  		"title": "大破进击",
  		"icon": require('./assets/img/icons/jesor.svg')
	}, {
  		"url": "https://hesamkaveh.com",
  		"title": "حسام‌ کاوه | روزنوشته های یک توسعه دهنده",
  		"icon": require('./assets/img/icons/hesamkaveh.svg')
	}, {
  		"url": "https://kexue.fm",
  		"title": "科学空间",
  		"icon": require('./assets/img/icons/kexue.svg')
	}, {
  		"url": "https://www.darmau.com",
  		"title": "城中村群租房",
  		"icon": require('./assets/img/icons/darmau.svg')
	}, {
	    "url": "https://tingtalk.me",
	    "title": "庭说",
	    "icon": require('./assets/img/icons/tingtalk.svg')
  }, {
	    "url": "http://weiwuhui.com",
	    "title": "扯氮集 -- 上海魏武挥的Blog",
	    "icon": require('./assets/img/icons/weiwuhui.svg')
  }, {
	    "url": "https://yurichev.com",
	    "title": "Dennis Yurichev",
	    "icon": require('./assets/img/icons/yurichev.svg')
  }, {
  		"url": "https://linghao.io",
  		"title": "Synthesist in the Shell",
  		"icon": require('./assets/img/icons/linghao.svg')
  }, {
  		"url": "https://linmi.cc",
  		"title": "Linmi - 探索未知，迭代新知，沉淀认知。",
  		"icon": require('./assets/img/icons/linmi.svg')
  }

];

//  console.log(Store.fetch_site().length)
export default {
	data() {
		return {
  		editOrComplete: '編輯',
       // test: 'test',
  		searchEngine: Store.getCookie('se'),
			newSiteurl: '',
			newSitetitle: '',
			newSiteicon: '',
      newTodo: '',
			canRemove: false,
			hasAddPanel: false,
			isSearch: false,
       // hasWeather: false,
       // test_sites: Store.fetch_test_site(),
			sites: Store.fetch_site(),
			info_sites: info_items,
			community_sites: community_items,
			documentary_travel_sites: documentary_travel_items,
			coding_sites: coding_items,
      course_sites: course_items,
			design_sites: design_items,
			publishing_book_sites: publishing_book_items,
      academic_sites: academic_items,
			tool_sites: tool_items,
			pictures_sites: pictures_items,
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
	    if(this.canRemove == false) this.editOrComplete = '編輯';
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
