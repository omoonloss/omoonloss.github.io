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
  <!--  <div class="searchbar mdui-toolbar mdui-color-blue mdui-col-xs-12"
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
        出版、書籍與閱讀
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
        © 2017~2021 &nbsp;<a href="https://o.moonloss.com" target="_blank">HOME</a>
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
        "url": "https://www.wolframalpha.com",
        "title": "Wolfram|Alpha: Computational Intelligence",
        "icon": require('./assets/img/icons/wolframalpha.svg')
    }, {
        "url": "https://libbyapp.com",
        "title": "Libby",
        "icon": require('./assets/img/icons/libby.svg')
    }, {
        "url": "https://www.notion.so",
        "title": "Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.",
        "icon": require('./assets/img/icons/notion.svg')
    }, {
        "url": "https://www.goodreads.com",
        "title": "Goodreads | Meet your next favorite book",
        "icon": require('./assets/img/icons/goodreads.svg')
    }, {
        "url": "https://www.britannica.com",
        "title": "大英百科全书 | Britannica",
        "icon": require('./assets/img/icons/britannica.svg')
    }, {
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
        "url": "https://tex.stackexchange.com",
        "title": "TeX - LaTeX Stack Exchange",
        "icon": require('./assets/img/icons/texstackexchange.svg')
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
        "url": "https://music.youtube.com",
        "title": "YouTube Music",
        "icon": require('./assets/img/icons/youtubemusic.svg')
    }, {
        "url": "https://www.ted.com",
        "title": "TED",
        "icon": require('./assets/img/icons/ted.svg')
    }, {
        "url": "https://ideas.ted.com",
        "title": "IDEAS.TED.COM | Explore ideas worth spreading",
        "icon": require('./assets/img/icons/default.svg')
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
    }
    // , {
    //     "url": "https://wx.zsxq.com/dweb",
    //     "title": "知识星球",
    //     "icon": require('./assets/img/icons/zsxq.svg')
    // }
    , {
        "url": "https://weibo.com",
        "title": "微博",
        "icon": require('./assets/img/icons/weibo.svg')
    }, {
        "url": "https://www.inoreader.com",
        "title": "Inoreader",
        "icon": require('./assets/img/icons/inoreader.svg')
    }, {
        "url": "https://www.instapaper.com",
        "title": "Instapaper",
        "icon": require('./assets/img/icons/instapaper.svg')
    }, 
    // {
    //     "url": "https://wx.qq.com",
    //     "title": "微信网页版",
    //     "icon": require('./assets/img/icons/weixin.svg')
    // },
    // {
    //     "url": "https://qzone.qq.com",
    //     "title": "QZone",
    //     "icon": require('./assets/img/icons/qzone.svg')
    // },
    // {
    //     "url": "https://zhihu.com",
    //     "title": "知乎",
    //     "icon": require('./assets/img/icons/zhihu.svg')
    // }, 
    // {
    //     "url": "https://coolapk.com",
    //     "title": "酷安",
    //     "icon": require('./assets/img/icons/coolapk.svg')
    // }, 
      {
        "url": "https://weixin.sogou.com",
        "title": "搜狗微信",
        "icon": require('./assets/img/icons/weixin-sogou.svg')
    }, {
        // 英语听力学习 BritishCouncil，一个来自于英国文化协会成立的免费英语听力学习网站，网站提供了相应的文字稿。它是个完全免费的网站，你可以在线收听或观看影片，配合网站提供的习题进行学习。
        "url": "https://learnenglish.britishcouncil.org/skills/listening",
        "title": "British Council",
        "icon": require('./assets/img/icons/britishcouncil.svg')
    }, {
        // 英语听力 口语练习网站Breaking News English，网站里都是近日的新闻，新闻难易程度被划分了等级，可以挑选适合自己水平的新闻进行阅读，另外同一则新闻也划分了级别，阅读程度从易到难。新闻看完后会有对应的练习题，可以从Listen / Read / Spell / Words等方面对文章进行学习。在听新闻时可以选择语速。
        "url": "https://breakingnewsenglish.com",
        "title": "Breaking News English Lessons: Easy English World News Materials - ESL",
        "icon": require('./assets/img/icons/breakingnewsenglish.svg')
    }, {
        // 新闻热点学英语：三个级别涉及不同表达方式，同时配有对应音视频版本，阅读听力两不误
        "url": "https://www.newsinlevels.com",
        "title": "NewsinLevels",
        "icon": require('./assets/img/icons/newsinlevels.svg')
    }, {
    	  // 话题特别多，与雅思阅难度相当
        "url": "https://www.sciencedaily.com",
        "title": "ScienceDaily",
        "icon": require('./assets/img/icons/sciencedaily.svg')
    }, {
        "url": "https://mangolanguages.com",
        "title": "Mango Languages | Online Language Learning Software",
        "icon": require('./assets/img/icons/mangolanguages.svg')
    }, {
        // 一个练听力的网站，内容丰富，可以直接下载
        "url": "https://www.51voa.com",
        "title": "美国之音-VOA听力下载,慢速英语,常速英语,VOA视频",
        "icon": require('./assets/img/icons/51voa.svg')
    }, {
        "url": "https://tw.voicetube.com",
        "title": "VoiceTube",
        "icon": require('./assets/img/icons/voicetube.svg')
    }, {
        "url": "https://www.3blue1brown.com",
        "title": "3Blue1Brown",
        "icon": require('./assets/img/icons/3blue1brown.svg')
    }, {
        "url": "https://classicalpoets.org",
        "title": "Society of Classical Poets",
        "icon": require('./assets/img/icons/classicalpoets.svg')
    }, {
        "url": "https://www.shicimingju.com",
        "title": "诗词名句网 -古诗词大全|诗歌|诗词鉴赏|古诗名句|诗句赏析！",
        "icon": require('./assets/img/icons/shicimingju.svg')
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
        "url": "https://www.mingyantong.com",
        "title": "名言通 | 美句佳句大全 伤感的句子 唯美的句子 优美的句子",
        "icon": require('./assets/img/icons/mingyantong.svg')
    }, {
        // 号称是全球最大的名言名句引用网站。 在这里不仅能找到国外历史上杰出人士所说的名句，还能发现当今著名的新闻人、作家等所说的话语
        "url": "https://www.brainyquote.com",
        "title": "Inspirational Quotes at BrainyQuote",
        "icon": require('./assets/img/icons/brainyquote.svg')
    }, {
        "url": "https://theme.npm.edu.tw/opendata",
        "title": "故宮Open Data專區",
        "icon": require('./assets/img/icons/npm-opendata.svg')
    }, {
        // 故宫博物院数字文物库，共收藏故宫珍藏文物68006件
        "url": "https://digicol.dpm.org.cn",
        "title": "故宫博物院数字文物库",
        "icon": require('./assets/img/icons/dpm-digicol.svg')
    }, {
    	  // 法国巴黎卢浮宫将其 48.2 万件收藏品数字化后 发布到网上，供任何人免费浏览。馆长 Jean-Luc Martinez 表示他们已经为此准备了好多年，其目的旨在服务于公众和研究人员，可访问性是其使命的核心。在线数据库不仅包括公开展示的收藏品，还包括保存的收藏。
        "url": "https://collections.louvre.fr/en/",
        "title": "Louvre site des collections",
        "icon": require('./assets/img/icons/louvre-collections.svg')
    }, {
        "url": "https://www.npm.gov.tw",
        "title": "国立故宫博物院",
        "icon": require('./assets/img/icons/npm.svg')
    }, {
        "url": "https://www.dpm.org.cn",
        "title": "故宫博物院",
        "icon": require('./assets/img/icons/dpm.svg')
    }, {
        // 荷兰阿姆斯特丹国家博物馆 70 万幅数字版本发布到公有领域。
        // 荷兰阿姆斯特丹国家博物馆 发布了其艺术收藏品的 数字版本，数量超过 70 万幅，可供任何人自由使用。这些数字图像采用了 Creative Commons 1.0 Universal (CC0 1.0) Public Domain Dedication 许可证，即无需任何版税使用费。这批收藏品包含了 2000 多幅来自荷兰黄金时代著名画家的作品，包括 Jacob van Ruisdael、Frans Hals、Johannes Vermeer、Jan Steen、伦勃朗及其学生。
        "url": "https://www.rijksmuseum.nl/en",
        "title": "荷兰阿姆斯特丹国家博物馆",
        "icon": require('./assets/img/icons/rijksmuseum.svg')
    }, {
        // 大都会艺术博物馆 (The Metropolitan Museum of Art) 位于美国纽约州纽约市曼哈顿中央公园旁，是世界上最大的、参观人数最多的艺术博物馆之一。
        "url": "https://www.metmuseum.org",
        "title": "大都会艺术博物馆",
        "icon": require('./assets/img/icons/metmuseum.svg')
    }, {
        // Philadelphia Art Museum 数字资源开放获取，其中关涉中国藏品较多 
        "url": "https://philamuseum.org",
        "title": "费城艺术博物馆",
        "icon": require('./assets/img/icons/philamuseum.svg')
    }, {
        // 德国科隆东方艺术博物馆 数字资源开放获取，馆藏丰富，清晰度一般 
        "url": "https://museum-fuer-ostasiatische-kunst.de/Start",
        "title": "德国科隆东方艺术博物馆",
        "icon": require('./assets/img/icons/museum-fuer-ostasiatische-kunst.svg')
    }, {
        // 日本法隆寺金堂壁画数字网站，设计直观简洁，展示了20世纪初大火烧掉的7世纪壁画的高清图像。敦煌之外的唐代寺观壁画十分稀少，这里算是其中最重要的一批作品
        "url": "https://view.horyuji-kondohekiga.jp",
        "title": "法隆寺金堂壁画ガラス原板 デジタルビューア｜Glass Photographic Plates of the Murals in the Kondō Hall of Hōryūji Temple―Digital Viewer―",
        "icon": require('./assets/img/icons/horyuji-kondohekiga.svg')
    }, {
        // 中研院數位文化中心，數位方輿，成果包含美國國會圖書館所藏之157件藏品、大英圖書館所藏之143件藏品、大英檔案館所藏之75件藏品，以及日本多所單位所藏之128件藏品，共計503件。包含單幅地圖、長幅卷軸、多幅卷軸與地圖冊等
        "url": "https://digitalatlas.asdc.sinica.edu.tw",
        "title": "数位方舆 Reading Digital Atlas",
        "icon": require('./assets/img/icons/digitalatlas.svg')
    }, {
        // 由韓國國立中央圖書館（NLK）與日本國立國會圖書館（NDL）聯合建構的東亞數位圖書館（East Asia Digital Library，EADL） (https://eadl.asia/home/)已開放使用，該資料庫現有兩館珍貴古籍8000件，稍後還將不斷增補，內容涵蓋文史多領域，可通過書名、關鍵字、作者、主題等方式檢索，是研究東亞文史的重要工具
        "url": "https://eadl.asia/home/",
        "title": "East Asia Digital Library | 東亞數位圖書館",
        "icon": require('./assets/img/icons/default.svg')
    }, {
        "url": "https://omniatlas.com",
        "title": "Omniatlas - Interactive Atlas of World History",
        "icon": require('./assets/img/icons/omniatlas.svg')
    }, {
        // 以 AI 知识图谱为核心引擎，通过高度时空化、关联化数据的方式构造及展现数字人文内容，尤其是历史知识
        "url": "https://www.allhistory.com",
        "title": "全历史",
        "icon": require('./assets/img/icons/allhistory.svg')
    }, {
        // 将在互联网上以多语种格式免费提供世界各地的重要材料,包括手稿、地图、珍本书籍、乐谱、录音、电影、印刷品、照片、建筑图等等
        "url": "https://www.wdl.org/zh",
        "title": "世界数字图书馆主页",
        "icon": require('./assets/img/icons/wdl.svg')
    }, {
        "url": "https://cjjc.weblio.jp",
        "title": "中国语辞书 - Weblio日中中日辞典",
        "icon": require('./assets/img/icons/cjjc.svg')
    }, {
        "url": "https://podcasts.google.com",
        "title": "Google 播客",
        "icon": require('./assets/img/icons/googlepodcasts.svg')
    }, {
        // Discover amazing new music and directly support the artists who make it.
        "url": "https://bandcamp.com",
        "title": "Bandcamp",
        "icon": require('./assets/img/icons/bandcamp.svg')
    }, {
        "url": "https://luooqi.com",
        "title": "鱼声音乐",
        "icon": require('./assets/img/icons/luooqi.svg')
    }, {
        "url": "https://bailemi.com/index.php/dance",
        "title": "百乐米 - 专注于分享好听的外文歌曲！",
        "icon": require('./assets/img/icons/bailemi.svg')
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
        // 一个很酷的免费在线音乐课程 —— 用一种可交互的方式来学习如何制作音乐，并且只需要浏览器就可以完成这个课程。当然，也可以把在线制作的作品导出到 Ableton Live 的软件上。教程从最简单的互动展开，分别介绍了节奏、音符和音阶、和弦、贝斯、旋律、歌曲结构，并且在高级话题中讨论了很多音阶、调式以及和弦方面的进阶课题。目前还是Beta版，有中文版
        "url": "https://learningmusic.ableton.com/zh-Hans/",
        "title": "Learning Music | 开始音乐创作之旅",
        "icon": require('./assets/img/icons/learningmusic.svg')
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
        "url": "https://dictionary.cambridge.org",
        "title": "Cambridge Dictionary | English Dictionary, Translations & Thesaurus",
        "icon": require('./assets/img/icons/cambridge-dictionary.svg')
    }, {
        // 输入你认为是同义或近义的两个英文单词，它会告诉你差别
        "url": "https://wikidiff.com",
        "title": "WikiDiff",
        "icon": require('./assets/img/icons/wikidiff.svg')
    }, {
        // 各种网络习语、小众词汇解释
        "url": "https://www.urbandictionary.com",
        "title": "Urban Dictionary",
        "icon": require('./assets/img/icons/urbandictionary.svg')
    }, {
        // 英语新造词词典 ，可以查询最新的英语新生网络词汇
        "url": "https://www.wordspy.com",
        "title": "Word Spy",
        "icon": require('./assets/img/icons/wordspy.svg')
    }, {
        "url": "https://forvo.com",
        "title": "Forvo: the pronunciation dictionary. All the words in the world pronounced by native speakers",
        "icon": require('./assets/img/icons/forvo.svg')
    }, {
        "url": "https://youglish.com",
        "title": "YouGlish | Improve your English pronunciation using YouTube",
        "icon": require('./assets/img/icons/youglish.svg')
    }, {
        // 英文写作知识库+高效练习网站，这个网站每天都发布新的文章来探讨英文写作相关的标点符号与文法使用，以及英文单字词汇拼写跟用法。网路使用普及的时代，不只用电子邮件非常频繁，能够写出清楚而正确的英文比以往任何时候都更加重要。无论你是上班族或学生，利用这个网站的文章解说，能够改善英文写作上的常犯错误，并且学习优异的英文书面表达能力
        "url": "https://www.dailywritingtips.com",
        "title": "Daily Writing Tips",
        "icon": require('./assets/img/icons/dailywritingtips.svg')
    }, {
        "url": "https://www.latexstudio.net",
        "title": "LaTeX工作室",
        "icon": require('./assets/img/icons/latexstudio.svg')
    }, 
    {
        "url": "https://www.amazon.com",
        "title": "Amazon",
        "icon": require('./assets/img/icons/amazon.svg')
    }, 
    // {
    //     "url": "https://taobao.com",
    //     "title": "淘宝",
    //     "icon": require('./assets/img/icons/taobao.svg')
    // },
     {
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
        "url": "https://www.imdb.com",
        "title": "IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows",
        "icon": require('./assets/img/icons/imdb.svg')
    }, {
        "url": "https://www.pressreader.com",
        "title": "PressReader.com -透过新闻将世界连结",
        "icon": require('./assets/img/icons/pressreader.svg')
    }, {
        "url": "https://trace.moe",
        "title": "Anime Scene Search Engine - trace.moe",
        "icon": require('./assets/img/icons/trace-moe.svg')
    }, {
        "url": "https://saucenao.com",
        "title": "SauceNAO Reverse Image Search",
        "icon": require('./assets/img/icons/saucenao.svg')
    }, {
        "url": "https://www.openstreetmap.org",
        "title": "OpenStreetMap",
        "icon": require('./assets/img/icons/openstreetmap.svg')
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
  		// 偏技术与创业，由著名孵化器 YC 发起，用户可以自发投稿和 upvote，可以看到热门的技术资讯、开源项目、商业投资文章等。
      "url": "https://news.ycombinator.com",
      "title": "Hacker News",
      "icon": require('./assets/img/icons/hacker-news.svg')
  }, {
      "url": "https://hn.moonloss.com",
      "title": "Nuxt HN",
      "icon": require('./assets/img/icons/nuxt-hn.svg')
  }, {
      // 关于科技，商业，金钱，地缘政治和中美关系的双语出版物。每个星期四和星期日都有新帖子。
			// 互联是一个电子周刊，从分析创建者（企业家，工程师）、运营者（企业经理）、投资者（资本家）和监管者（政客和政府官员）的角度和「维纳图」，以及他们之间的相互联系，来分析各个行业和思考宏观趋势。
			// 其主理人曾经做过一家电商和医疗保险公司的创始人，美国白宫和奥巴马总统竞选团队的工作人员，跨国企业科技公司的高管和顾问，以及风险投资。详细介绍可转 https://interconnected.blog/about/# 处查看。
      "url": "https://interconnected.blog",
      "title": "Interconnected | Analyzing Businesses and Trends From the Lens of Builders, Operators, Investors, Regulators, and How They Are Connected",
      "icon": require('./assets/img/icons/interconnected.svg')
  }, {
  	  // 用中文浏览国外社交媒体里的热门讨论。 母语快速导读， 感兴趣再进原文深度阅读
      "url": "https://www.buzzing.cc",
      "title": "Buzzing - 用中文浏览国外社交媒体里的热门讨论",
      "icon": require('./assets/img/icons/buzzing.svg')
  }, {
      "url": "https://www.outsightchina.com",
      "title": "看鉴中国 | Outsight China",
      "icon": require('./assets/img/icons/outsightchina.svg')
  }, {
      "url": "https://www.cup.com.hk",
      "title": "*CUP - 每日十條世界要聞 與你清醒同行",
      "icon": require('./assets/img/icons/cup.svg')
  }, {
      "url": "https://www.jiemian.com",
      "title": "界面新闻-只服务于独立思考的人群-Jiemian.com",
      "icon": require('./assets/img/icons/jiemian.svg')
  }, {
      // 最有名的独立创投分析评论博主 Ben Thompson，除了每天更新一些简短的资讯评论，付费后可以完整查看他每周一篇的深度文章，有自己一套的分析体系。
      "url": "https://stratechery.com",
      "title": "Stratechery by Ben Thompson – On the business, strategy, and impact of technology.",
      "icon": require('./assets/img/icons/stratechery.svg')
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
      "url": "https://www.vox.com",
      "title": "Vox - Understand the News",
      "icon": require('./assets/img/icons/vox.svg')
  }, {
      "url": "https://www.newyorker.com",
      "title": "The New Yorker",
      "icon": require('./assets/img/icons/newyorker.svg')
  }, {
      "url": "https://www.nytimes.com",
      "title": "The New York Times - Breaking News, World News & Multimedia",
      "icon": require('./assets/img/icons/nytimes.svg')
  }, {
      "url": "https://www.ft.com",
      "title": "Financial Times",
      "icon": require('./assets/img/icons/ft.svg')
  }, {
      "url": "https://www.ftchinese.com",
      "title": "FT中文网 － 全球财经精粹",
      "icon": require('./assets/img/icons/ftchinese.svg')
  }, {
      "url": "https://www.latimes.com",
      "title": "Los Angeles Times - News from California, the nation and world",
      "icon": require('./assets/img/icons/latimes.svg')
  }, {
      "url": "https://www.wsj.com",
      "title": "The Wall Street Journal - Breaking News, Business, Financial & Economic News, World News and Video",
      "icon": require('./assets/img/icons/wsj.svg')
  }, {
      "url": "https://www.washingtonpost.com",
      "title": "The Washington Post: Breaking News, World, US, DC News and Analysis",
      "icon": require('./assets/img/icons/washingtonpost.svg')
  }, {
      "url": "https://www.economist.com",
      "title": "The Economist - World News, Politics, Economics, Business & Finance",
      "icon": require('./assets/img/icons/economist.svg')
  }, {
      "url": "https://www.nature.com",
      "title": "Nature",
      "icon": require('./assets/img/icons/nature.svg')
  }, {
      "url": "https://time.com",
      "title": "TIME | Current & Breaking News | National & World Updates",
      "icon": require('./assets/img/icons/time.svg')
  }, {
      "url": "https://www.scientificamerican.com",
      "title": "Scientific American: Science News, Expert Analysis, Health Research - Scientific American",
      "icon": require('./assets/img/icons/scientificamerican.svg')
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
      "url": "https://theinitium.com",
      "title": "端傳媒 Initium Media",
      "icon": require('./assets/img/icons/theinitium.svg')
  }, {
      "url": "https://hk.appledaily.com",
      "title": "蘋果日報",
      "icon": require('./assets/img/icons/appledaily-gray.svg')
  }, {
      "url": "https://www.rfi.fr/cn",
      "title": "RFI 华语 - 法国国际广播电台",
      "icon": require('./assets/img/icons/rfi.svg')
  }, {
      "url": "https://cn.nikkei.com",
      "title": "日经中文网--日本经济新闻中文版",
      "icon": require('./assets/img/icons/nikkei.svg')
  }, {
      "url": "https://money.udn.com/money/index",
      "title": "經濟日報",
      "icon": require('./assets/img/icons/money-udn.svg')
  }, {
      "url": "https://www.theverge.com",
      "title": "The Verge",
      "icon": require('./assets/img/icons/theverge.svg')
  }, {
      "url": "https://tw.live",
      "title": "TW live",
      "icon": require('./assets/img/icons/tw-live.svg')
  }, {
      "url": "https://techcrunch.com",
      "title": "TechCrunch – Startup and Technology News",
      "icon": require('./assets/img/icons/techcrunch.svg')
  }, {
      "url": "https://www.wired.com",
      "title": "WIRED",
      "icon": require('./assets/img/icons/wired.svg')
  }, {
      "url": "https://arstechnica.com",
      "title": "Ars Technica",
      "icon": require('./assets/img/icons/arstechnica.svg')
  }, {
      "url": "https://www.technologyreview.com",
      "title": "MIT Technology Review",
      "icon": require('./assets/img/icons/technologyreview.svg')
  }, {
      "url": "https://www.macrumors.com",
      "title": "MacRumors: Apple Mac iPhone Rumors and News",
      "icon": require('./assets/img/icons/macrumors.svg')
  }, {
      "url": "https://slashdot.org",
      "title": "Slashdot: News for nerds, stuff that matters",
      "icon": require('./assets/img/icons/slashdot.svg')
  }, {
      "url": "https://mashable.com",
      "title": "Mashable",
      "icon": require('./assets/img/icons/mashable.svg')
  }, {
      "url": "https://www.fastcompany.com",
      "title": "Fast Company | The future of business",
      "icon": require('./assets/img/icons/fastcompany.svg')
  }, {
      "url": "https://9to5google.com",
      "title": "9to5Google - Google news, Pixel, Android, Home, Chrome OS, more",
      "icon": require('./assets/img/icons/9to5google.svg')
  }, {
      "url": "https://9to5mac.com",
      "title": "9to5Mac - Apple News & Mac Rumors Breaking All Day",
      "icon": require('./assets/img/icons/9to5mac.svg')
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
      "url": "https://www.engadget.com",
      "title": "Engadget",
      "icon": require('./assets/img/icons/engadget.svg')
  }, {
      "url": "https://chinese.engadget.com",
      "title": "Engadget 中文版 - 消费性电子產品新闻和评测",
      "icon": require('./assets/img/icons/chinese-engadget.svg')
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
      "url": "https://blog.shuziyimin.org",
      "title": "数字移民",
      "icon": require('./assets/img/icons/shuziyimin.svg')
  }, {
  		// 「可能吧」建立于 2007 年 4 月，经历了中国博客潮流最辉煌的时光，获得了中外数个博客奖项，包括德国之声的 2010 年的「最佳中文博客奖」。2010 年 3 月 23 日可能吧被和谐，至今仍需科学访问。关注「有用有趣的互联网趋势」，不管这个趋势是中国还是中国以外的。
      "url": "https://kenengba.com",
      "title": "可能吧",
      "icon": require('./assets/img/icons/kenengba.svg')
  }, {
      // https://www.iyouport.org
      "url": "https://iyouport.substack.com",
      "title": "iYouPort - IYP 不是过眼云烟的新闻网站，我们提供实战能力，这里是值得您反复回看的档案室",
      "icon": require('./assets/img/icons/iyouport.svg')
  }, {
      "url": "https://sec-wiki.com",
      "title": "SecWiki-安全维基,汇集国内外优秀安全资讯、工具和网站",
      "icon": require('./assets/img/icons/sec-wiki.svg')
  }, {
      "url": "https://itsfoss.com",
      "title": "It's FOSS",
      "icon": require('./assets/img/icons/itsfoss.svg')
  }, {
      "url": "https://fedoramagazine.org",
      "title": "Fedora Magazine - Guides, information, and news about the Fedora operating system for users, developers, system administrators, and community members.",
      "icon": require('./assets/img/icons/fedoramagazine.svg')
  }, {
      // 适用于 Web 设计师和开发人员
      "url": "https://www.smashingmagazine.com",
      "title": "Smashing Magazine – For Professional Web Designers and Developers",
      "icon": require('./assets/img/icons/smashingmagazine.svg')
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
      "url": "https://kotaku.com",
      "title": "Kotaku | Gaming Reviews, News, Tips and More.",
      "icon": require('./assets/img/icons/kotaku.svg')
  }, {
      "url": "https://www.polygon.com",
      "title": "Polygon",
      "icon": require('./assets/img/icons/polygon.svg')
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
  }, {
      "url": "https://rizime.substack.com",
      "title": "Λ-Reading Newsletter",
      "icon": require('./assets/img/icons/rizime.svg')
  }, {
      "url": "https://acacess.substack.com",
      "title": "Sustainable Productivity",
      "icon": require('./assets/img/icons/acacess.svg')
  }
];

// Community
var community_items = [
  {
      "url": "https://krita-artists.org",
      "title": "Krita Artists - Krita community forum",
      "icon": require('./assets/img/icons/krita-artists.svg')
  }, {
      "url": "https://www.1point3acres.com",
      "title": "一亩三分地社区: 留学|申请|求职|移民|生活 - 高信噪比 + 纯干货",
      "icon": require('./assets/img/icons/1point3acres.svg')
  }, {
      "url": "https://1o24bbs.com",
      "title": "1024 BBS",
      "icon": require('./assets/img/icons/1o24bbs.svg')
  }, {
      "url": "https://forum.xda-developers.com",
      "title": "XDA Developers Forums",
      "icon": require('./assets/img/icons/xdaforum.svg')
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
      // FreeBuf 是国内活跃度比较高的垂直类网络安全网站。上面有大量国外优秀的技术文章，专业性比较高。比较适合相对资深的极客、黑客人群，以及网站安全类岗位的从业人员。
      "url": "https://www.freebuf.com",
      "title": "FreeBuf网络安全行业门户",
      "icon": require('./assets/img/icons/freebuf.svg')
  }, {
      "url": "https://www.nowcoder.com",
      "title": "牛客网",
      "icon": require('./assets/img/icons/nowcoder.svg')
  }, {
      "url": "http://www.cskaoyan.com/forum.php",
      "title": "王道论坛",
      "icon": require('./assets/img/icons/cskaoyan.svg')
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
  }, {
      // 用真实的技术专家撰写的不受束缚的故事和观点反映了技术行业。
      "url": "https://hackernoon.com",
      "title": "Hacker Noon",
      "icon": require('./assets/img/icons/hackernoon.svg')
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
      "url": "https://ide.goorm.io",
      "title": "goormIDE - A Powerful Cloud IDE Service",
      "icon": require('./assets/img/icons/goorm.svg')
  }, {
      "url": "https://codesandbox.io",
      "title": "CodeSandbox",
      "icon": require('./assets/img/icons/codesandbox.svg')
  }, {
      "url": "https://www.kaggle.com",
      "title": "Kaggle | Find Open Datasets and Machine Learning Projects",
      "icon": require('./assets/img/icons/kaggle.svg')
  }, {
      "url": "https://colab.research.google.com",
      "title": "Colaboratory",
      "icon": require('./assets/img/icons/colaboratory.svg')
  }, {
      "url": "https://deepnote.com",
      "title": "Deepnote - Data science notebook for teams",
      "icon": require('./assets/img/icons/deepnote.svg')
  }, {
      "url": "https://www.db-fiddle.com",
      "title": "DB Fiddle - SQL Database Playground",
      "icon": require('./assets/img/icons/db-fiddle.svg')
  }, {
      // 代码可视化网站，可将代码按执行步骤，分段可视化展示，并允许将可视化代码内嵌到网站上。
      // 目前已支持 Python、Java、C、C++、JavaScript、Ruby 等编程语言，该工具可应用到文档教程、技术讲座、团队新手指引项目等场景上
      "url": "https://pythontutor.com",
      "title": "Python Tutor - Visualize Python, Java, C, C++, JavaScript, TypeScript, and Ruby code execution",
      "icon": require('./assets/img/icons/pythontutor.svg')
  }, {
      "url": "https://wandbox.org",
      "title": "[Wandbox]三へ( へ՞ਊ ՞)へ ﾊｯﾊｯ",
      "icon": require('./assets/img/icons/wandbox.svg')
  }, {
      "url": "https://3v4l.org",
      "title": "Online PHP editor | Test code in 250+ PHP versions",
      "icon": require('./assets/img/icons/3v4l.png')
  }, {
      // Code the Future In Your Browser.
      "url": "https://stackblitz.com",
      "title": "StackBlitz - The online code editor for web apps. Powered by Visual Studio Code.",
      "icon": require('./assets/img/icons/stackblitz.svg')
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
      // 包含了排序、链表、哈希表、二叉搜索树、递归树、循环查找等常见算法动画。在动画执行的过程中，还会在网站右下角高亮显示当前动画的代码逻辑。网站还提供了一些算法练习题供用户训练，可巩固自己的算法知识。
      "url": "https://visualgo.net/zh",
      "title": "Visualgo",
      "icon": require('./assets/img/icons/visualgo.svg')
  }, {
      "url": "https://algorithm-visualizer.org",
      "title": "Algorithm Visualizer",
      "icon": require('./assets/img/icons/algorithm-visualizer.svg')
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
  }, {
      // 里面整理了各种技术类型的速查表 ，包括 Git、Vim、Go、MySQL、Linux、VSCode、Vue 等各大常用技术的速查表清单
      "url": "https://devhints.io",
      "title": "Devhints — TL;DR for developer documentation",
      "icon": require('./assets/img/icons/devhints.svg')
  }

];

// Course
var course_items = [
  {
      "url": "https://openlearning.mit.edu",
      "title": "MIT Open Learning brings Online Learning to MIT and the world",
      "icon": require('./assets/img/icons/mit.svg')
  }, {
      "url": "https://www.udemy.com",
      "title": "Udemy | 在线课程 - 时间自由，学您想学",
      "icon": require('./assets/img/icons/udemy.svg')
  }, {
      "url": "https://www.edx.org",
      "title": "edX | Free Online Courses by Harvard, MIT, & more | edX",
      "icon": require('./assets/img/icons/edx.svg')
  }, {
      "url": "https://www.freecodecamp.org",
      "title": "Learn to Code — For Free — Coding Courses for Busy People",
      "icon": require('./assets/img/icons/freecodecamp.svg')
  }, {
      "url": "https://www.coursera.org",
      "title": "Coursera | Build Skills with Online Courses from Top Institutions",
      "icon": require('./assets/img/icons/coursera.svg')
  }, {
      "url": "https://www.educative.io",
      "title": "Educative: Interactive Courses for Software Developers",
      "icon": require('./assets/img/icons/educative.svg')
  }, {
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
  }, {
      // Mookit: An Indian MOOC Platform
      "url": "https://www.mookit.in",
      "title": "mooKIT",
      "icon": require('./assets/img/icons/mookit.svg')
  }, {
      // 一个汇集了世界一流高校的在线课程资源平台。在OnlineCourses，你可以找到500多个经认证的免费在线大学课程，这些课程为你提供了世界上一些最好大学的研究型学术资源的机会。
      "url": "https://www.onlinecourses.com",
      "title": "OnlineCourses",
      "icon": require('./assets/img/icons/onlinecourses.svg')
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
      "url": "https://www.pixiv.net",
      "title": "Pixiv",
      "icon": require('./assets/img/icons/pixiv.svg')
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
      "url": "https://www.pixeltrue.com/illustrations",
      "title": "Pixel True - Beautiful illustration packs",
      "icon": require('./assets/img/icons/pixeltrue.svg')
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

// Publishing & Book & Reading
var publishing_book_items = [
  {
      "url": "https://www.penguin.co.uk",
      "title": "Penguin Books UK | Official Website",
      "icon": require('./assets/img/icons/penguin.svg')
  }, {
      "url": "https://www.packtpub.com",
      "title": "Packtpub",
      "icon": require('./assets/img/icons/packtpub.svg')
  }, {
      "url": "https://www.manning.com",
      "title": "Manning",
      "icon": require('./assets/img/icons/manning.svg')
  }, {
      "url": "https://freecontent.manning.com",
      "title": "Manning - Free Content Center",
      "icon": require('./assets/img/icons/manning.svg')
  }, {
      "url": "https://pragprog.com",
      "title": "Pragmatic Bookshelf: By Developers, For Developers",
      "icon": require('./assets/img/icons/pragprog.svg')
  }, {
      "url": "https://leanpub.com",
      "title": "Leanpub",
      "icon": require('./assets/img/icons/leanpub.svg')
  }, {
      "url": "https://nostarch.com",
      "title": "No Starch Press | The finest in geek entertainment",
      "icon": require('./assets/img/icons/nostarch.svg')
  }, {
      "url": "https://www.pearson.com",
      "title": "Pearson | The world's learning company",
      "icon": require('./assets/img/icons/pearson.svg')
  }, {
      "url": "https://mitpress.mit.edu",
      "title": "The MIT Press",
      "icon": require('./assets/img/icons/mitpress.svg')
  }, {
      "url": "https://www.newline.co",
      "title": "newline | Learn to build React, Angular, Vue, GraphQL, and Node.js Apps with real-world projects",
      "icon": require('./assets/img/icons/newline.svg')
  }, {
      "url": "https://readmoo.com",
      "title": "Readmoo读墨电子书 ─ 台湾最大繁体中文EPUB电子书服务",
      "icon": require('./assets/img/icons/readmoo.svg')
  }, {
      "url": "https://ebook.hyread.com.tw",
      "title": "HyRead ebook 電子書店",
      "icon": require('./assets/img/icons/hyread.svg')
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
      "url": "http://wap.gxlib.org.cn/ermsClient/browse.do",
      "title": "广西壮族自治区图书馆 | 电子资源平台",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      "url": "http://ebooks.lib.ntu.edu.tw/Home/ListBooks",
      "title": "臺湾大学图书馆＊公开取用电子书",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      "url": "https://www.thriftbooks.com",
      "title": "ThriftBooks | New & Used Books | Buy Cheap Books Online at ThriftBooks",
      "icon": require('./assets/img/icons/thriftbooks.svg')
  }, {
      // 可能是最好用的古籍资料下载网站
      "url": "https://new.shuge.org",
      "title": "书格",
      "icon": require('./assets/img/icons/shuge.svg')
  }, {
      "url": "https://bookfere.com",
      "title": "书伴",
      "icon": require('./assets/img/icons/bookfere.svg')
  }, {
      // 一个外文电子书 网站，目前有1271515本书可供在线阅读
      "url": "https://www.forgottenbooks.com/en",
      "title": "Forgotten Books",
      "icon": require('./assets/img/icons/forgottenbooks.svg')
  }, {
      "url": "https://digilibraries.com",
      "title": "DigiLibraries | Free eBooks library",
      "icon": require('./assets/img/icons/digilibraries.svg')
  }, {
      // Project Gutenberg (古登堡计划) 古腾堡免费电子书 已超过60000本
      // 同英文网站，资 源储备惊人！别看是英文的，选择书籍语言，可以看到很多中文书籍（大多是繁体，你懂我意思吧。）
      "url": "https://www.gutenberg.org",
      "title": "Gutenberg",
      "icon": require('./assets/img/icons/gutenberg.svg')
  }, {
      "url": "https://www.planetebook.com",
      "title": "Planet eBook",
      "icon": require('./assets/img/icons/planetebook.svg')
  }, {
      // 除了资源多，鸠摩还贴心地按照不同的格式对书籍进行了分类
      "url": "https://www.jiumodiary.com",
      "title": "鸠摩搜索",
      "icon": require('./assets/img/icons/jiumodiary.svg')
  }, {
      "url": "https://openstax.org",
      "title": "OpenStax Homepage - OpenStax",
      "icon": require('./assets/img/icons/openstax.svg')
  }, {
      // 这个站点可以找到一些国外的教材，可按分类查找，每本书都有介绍和目录。也不用注册，直接就能免费下载。
      "url": "https://cnx.org",
      "title": "OpenStax CNX Library",
      "icon": require('./assets/img/icons/cnx.svg')
  }, {
      "url": "https://www.letmeread.net", 
      "title": "Let Me Read » Best Books to Read in a Lifetime",  
      "icon": require('./assets/img/icons/letmeread.svg')
  }, {
      // Z-Library
      "url": "https://booksc.org", 
      "title": "Z-Lib-1",  
      "icon": require('./assets/img/icons/zlib.svg')
  }, {
      // https://z-lib.org  https://1lib.us  https://zh.jp1lib.org  https://jp1lib.org  https://zh.1lib.org
      // Z-Library 项目部分. 全球最大的数字图书馆
      // 自2009年起的免费图书馆. 
      // 免费下载epub、pdf、mobi格式电子书
      // 支持转换为FB2、TXT、RTF等格式
      "url": "https://b-ok.asia",
      "title": "Z-Lib-2",
      "icon": require('./assets/img/icons/zlib.svg')
  }, {
      // http://gen.lib.rus.ec 超有名的俄罗斯网站，真的有超多书籍！教科书在这里甚至能直接找到原版！中文书籍也超丰富的啊！
      "url": "http://libgen.rs",
      "title": "Library Genesis", // Libgen
      "icon": require('./assets/img/icons/libgen.svg')
  }, {
      // 有很多 Libgen 上都没有的学术著作 pdf 下载，很多都是新书.
      "url": "https://oapen.org",
      "title": "Online Library and Publication Platform | OAPEN", 
      "icon": require('./assets/img/icons/oapen.svg')
  }, {
      // 是美国一个免费在线阅读网站，是由宾夕法尼亚大学数字图书馆的策划研究员John Mark Ockerbloom创建并校订的，目前由宾夕法尼亚大学图书馆负责管理运作 
      "url": "https://onlinebooks.library.upenn.edu",
      "title": "The Online Books Page", 
      "icon": require('./assets/img/icons/onlinebooks.svg')
  }, {
      "url": "https://downmagaz.net",
      "title": "Magazines Commumity! | Download PDF magazines", 
      "icon": require('./assets/img/icons/downmagaz.svg')
  }, {
      "url": "https://www.worldmags.net",
      "title": "PDF Digital Magazines", 
      "icon": require('./assets/img/icons/worldmags.svg')
  }, {
      "url": "https://magazinelib.com",
      "title": "Magzinelib",
      "icon": require('./assets/img/icons/magzinelib.svg')
  }, {
      "url": "https://www.worldofmagazine.com",
      "title": "Free Download PDF Magazines - World of Magazine",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      "url": "https://freemagazinepdf.com",
      "title": "Magazines PDF download free - E-magazines free download in pdf",
      "icon": require('./assets/img/icons/freemagazinepdf.svg')
  }, {
      // 一个日本的书籍和图像等资源整合查询浏览网站
      "url": "https://cultural.jp/en",
      "title": "Cultural Japan (カルチュラル・ジャパン)", 
      "icon": require('./assets/img/icons/cultural.svg')
  }, {
      "url": "https://xmsoushu.com",
      "title": "熊猫搜书",
      "icon": require('./assets/img/icons/xmsoushu.svg')
  }, {
      "url": "https://ebook2.lorefree.com",
      "title": "LoreFree-去中心化免费电子书共享社区",
      "icon": require('./assets/img/icons/lorefree.svg')
  }, {
      "url": "https://salttiger.com",
      "title": "SaltTiger | 每天一本编程书，每天进步一点点",
      "icon": require('./assets/img/icons/salttiger.svg')
  }, {
  		// 这个网站收藏的文本已超过三万部著作，并有五十亿字之多，可免费浏览，为历代中文文献资料库最大者。
      "url": "https://ctext.org/zhs",
      "title": "中国哲学书籍电子化计划",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      "url": "https://www.gujiguan.com/index.aspx",
      "title": "古籍馆-中国最大的古籍图书馆",
      "icon": require('./assets/img/icons/gujiguan.svg')
  }, {
      "url": "https://sou-yun.cn/eBookIndex.aspx",
      "title": "影印古籍资料",
      "icon": require('./assets/img/icons/sou-yun.svg')
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
      "url": "https://www.tjxz.cc",
      "title": "田间小站",
      "icon": require('./assets/img/icons/tjxz.svg')
  }, {
      "url": "https://www.pdfdrive.com",
      "title": "PDF Drive - Search and download PDF files for free.",
      "icon": require('./assets/img/icons/pdfdrive.svg')
  }, {
      // 在线出版社网站，致力于免费图书在线分享，主要是公共版权图书的在线阅读和下载（pdf），小说、古典文学、历史传记等等
      "url": "https://freeditorial.com",
      "title": "Freeditorial",
      "icon": require('./assets/img/icons/freeditorial.svg')
  }, {
      "url": "https://www.52doc.com",
      "title": "我爱电子书",
      "icon": require('./assets/img/icons/52doc.svg')
  }, {
      "url": "https://duzhege.cn",
      "title": "读者阁",
      "icon": require('./assets/img/icons/duzhege.svg')
  }, {
      "url": "https://www.enjing.com",
      "title": "恩京的书房",
      "icon": require('./assets/img/icons/enjing.svg')
  }, {
      "url": "https://sobooks.cc",
      "title": "SoBooks - 一起分享阅读的乐趣~",
      "icon": require('./assets/img/icons/sobooks.svg')
  }, {
      "url": "https://yabook.org",
      "title": "雅书 - PDF电子书学习下载站",
      "icon": require('./assets/img/icons/yabook.svg')
  }, {
      // 一个收录各种优质程序书籍的网站，还在不断丰富中…… 
      "url": "https://www.best-books.dev",
      "title": "The best Programming books",
      "icon": require('./assets/img/icons/best-books.svg')
  }, {
      // 繁体字的界面，一个推广中文电子书的公益网站，建站于2001年。
      "url": "http://www.haodoo.net",
      "title": "好讀",
      "icon": require('./assets/img/icons/haodoo.svg')
  }, {
      "url": "https://www.e-booksdirectory.com",
      "title": "E-Books Directory - Categorized Links to Free Books",
      "icon": require('./assets/img/icons/e-booksdirectory.svg')
  }, {
      // 一个可以免费下载绝版艺术书籍的网站 ，盖蒂博物馆虚拟图书馆 。馆中收藏有三百多本绝版艺术书，包含了从艺术流派到特定艺术家的作品。盖蒂出版社的一位经理说：“当一本绝版书的再版没有经济意义时，就几乎不会有出版社将这本书再次出版，很多好书也因此消失。盖蒂图书馆希望能用电子版书籍的形式，让更多人能看到这些濒临消失的书籍。”
      "url": "https://www.getty.edu/publications/virtuallibrary",
      "title": "Getty Publications Virtual Library",
      "icon": require('./assets/img/icons/getty-virtuallibrary.svg')
  }, {
      "url": "https://lithub.com",
      "title": "Literary Hub",
      "icon": require('./assets/img/icons/lithub.svg')
  }, {
      // 以新的方式发现书籍，就像逛书店一样
      "url": "https://shepherd.com",
      "title": "Shepherd | Discover The Best Books To Read 📚",
      "icon": require('./assets/img/icons/shepherd.svg')
  }, {
      // 英文长文阅读网站
      "url": "https://longreads.com",
      "title": "Longreads : The best longform stories on the web",
      "icon": require('./assets/img/icons/longreads.svg')
  }, {
      // 英文长文阅读网站
      "url": "https://nautil.us",
      "title": "Nautilus | Science Connected",
      "icon": require('./assets/img/icons/nautil.svg')
  }, {
      // 英文长文阅读网站
      "url": "https://longform.org",
      "title": "Longform",
      "icon": require('./assets/img/icons/longform.svg')
  }, {
      // 英文长文阅读网站
      "url": "https://thebrowser.com",
      "title": "The Browser",
      "icon": require('./assets/img/icons/thebrowser.svg')
  }, {
      // 台湾一个社科书籍推荐网站
      "url": "https://whogovernstw.org",
      "title": "菜市场政治学",
      "icon": require('./assets/img/icons/whogovernstw.svg')
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
      "url": "https://sci-hub.st",
      "title": "Sci-Hub: removing barriers in the way of science",
      "icon": require('./assets/img/icons/sci-hub.svg')
  }, {
      // 免费科技 文献论文 网站，涵盖了计算机科学，材料，工程等方面超过200多部免费书籍和8000多免费专业论文的网站。
      "url": "https://www.intechopen.com",
      "title": "IntechOpen - Open Science Open Minds | IntechOpen",
      "icon": require('./assets/img/icons/intechopen.svg')
  }, {
      // 输入想找的paper或者作者，直接会生成一张graph关联图，可以找到和这篇文章有关的大部分文章！
      "url": "https://www.connectedpapers.com",
      "title": "Connected Papers | Find and explore academic papers",
      "icon": require('./assets/img/icons/connectedpapers.svg')
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
  }, {
      // Seminar Live 是一个免费、开放的在线学术信息平台，在这里，你可以分享、追踪、保存、参与在线学术讲座以及过往的学术影音记录。如果从最基本的功能来说，你可以把Seminar Live当做一个每日线上学术活动指南来用
      "url": "https://www.seminar-live.com",
      "title": "Seminar Live",
      "icon": require('./assets/img/icons/seminar-live.svg')
  }

];

// 工具
var tool_items = [
  {
      "url": "https://csrankings.org",
      "title": "CSRankings: Computer Science Rankings",
      "icon": require('./assets/img/icons/csrankings.svg')
  }, {
      "url": "https://outline.com",
      "title": "Outline - Read & annotate without distractions",
      "icon": require('./assets/img/icons/outline.svg')
  }, {
      "url": "https://web.baimiaoapp.com",
      "title": "白描网页版 - 在线OCR文字识别、图片文字提取",
      "icon": require('./assets/img/icons/baimiaoapp.svg')
  }, {
      "url": "https://www.onlineocr.net",
      "title": "Online OCR",
      "icon": require('./assets/img/icons/onlineocr.svg')
  }, {
      "url": "https://fontmeme.com/shadow-effect/",
      "title": "Shadow Effect Online",
      "icon": require('./assets/img/icons/fontmeme.svg')
  }, {
      "url": "https://songwhip.com",
      "title": "Songwhip | Music links to every platform | Free",
      "icon": require('./assets/img/icons/songwhip.svg')
  }, {
      "url": "https://www.desmos.com",
      "title": "Desmos | 免费领略数学之美",
      "icon": require('./assets/img/icons/desmos.svg')
  }, {
      "url": "https://codefence.io",
      "title": "codefence - an easily embeddable interactive code editor",
      "icon": require('./assets/img/icons/codefence.svg')
  }, {
      // Bulk install Windows apps quickly with Windows Package Manager.
      "url": "https://winstall.app",
      "title": "winstall - GUI for Windows Package Manager",
      "icon": require('./assets/img/icons/winstall.svg')
  }, {
      "url": "https://www.ankitube.com",
      "title": "Anki | 一键生成听力卡 音频听力 Youtube 油管牌组",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      "url": "https://downsub.com",
      "title": "DownSub - Download subtitles from Youtube, Viki, Viu, Vlive and more!",
      "icon": require('./assets/img/icons/downsub.svg')
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
  	   // 字体包 ttc 格式转 ttf 工具
      "url": "https://transfonter.org/ttc-unpack",
      "title": "Transfonter — Convert TTC or DFONT to TTF online",
      "icon": require('./assets/img/icons/transfonter.svg')
  }, {
      "url": "https://image.online-convert.com",
      "title": "Online image converter",
      "icon": require('./assets/img/icons/online-converter.svg')
  }, {
      "url": "https://vectr.com",
      "title": "Vectr - Free Online Vector Graphics Editor",
      "icon": require('./assets/img/icons/vectr.svg')
  }, {
      "url": "https://codebeautify.org",
      "title": "Free Online Tools For Developers - to Beautify, Validate, Minify, Analyse, Convert JSON, XML, JavaScript, CSS, HTML, Excel",
      "icon": require('./assets/img/icons/codebeautify.svg')
  }, {
      "url": "https://www.uuidgenerator.net",
      "title": "Online UUID Generator Tool",
      "icon": require('./assets/img/icons/uuidgenerator.svg')
  }, {
      "url": "https://utf-8-illustrator.com",
      "title": "The UTF-8 Illustrator",
      "icon": require('./assets/img/icons/utf-8-illustrator.svg')
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
      "url": "https://ipinfo.io",
      "title": "IPinfo.io | Comprehensive IP address data, IP geolocation API and database",
      "icon": require('./assets/img/icons/ipinfo.svg')
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
      "url": "https://mixtapemanager.ca",
      "title": "Mixtape Manager",
      "icon": require('./assets/img/icons/mixtapemanager.svg')
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
      // 一个纸盒制作网站，各种形状的都有
      "url": "https://www.templatemaker.nl",
      "title": "Templatemaker",
      "icon": require('./assets/img/icons/templatemaker.svg')
  }, {
      // Conversion between Traditional and Simplified Chinese
      "url": "https://opencc.byvoid.com",
      "title": "開放中文轉換 Open Chinese Convert (OpenCC)",
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
      "url": "https://www.nslookup.io",
      "title": "Online nslookup — Find DNS records",
      "icon": require('./assets/img/icons/nslookup.svg')
  }, {
      "url": "https://iknowwhatyoudownload.com",
      "title": "I Know What You Download",
      "icon": require('./assets/img/icons/iknowwhatyoudownload.svg')
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
      // HTTP状态代码目录，其中包含定义，详细信息和有用的代码参考
      "url": "https://httpstatuses.com",
      "title": "HTTP Status Codes",
      "icon": require('./assets/img/icons/httpstatuses.svg')
  }, {
      "url": "https://openmoji.org",
      "title": "OpenMoji",
      "icon": require('./assets/img/icons/openmoji.svg')
  }, {
      // 实时查看全球气象
      "url": "https://earth.nullschool.net",
      "title": "earth :: a global map of wind, weather, and ocean conditions",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      // 可以让你看到地球表面的实时卫星照片
      "url": "https://zoom.earth/storms/",
      "title": "Zoom Earth | 缩放地球",
      "icon": require('./assets/img/icons/zoom-earth.svg')
  }, {
      "url": "https://himawari8.nict.go.jp",
      "title": "向日葵-8号",
      "icon": require('./assets/img/icons/himawari8.svg')
  }, {
        "url": "https://earth.google.com/web",
        "title": "Google Earth",
        "icon": require('./assets/img/icons/google-earth.svg')
  }, {
        "url": "https://earthengine.google.com/timelapse",
        "title": "Google Earth Timelapse",
        "icon": require('./assets/img/icons/google-earth-timelapse.svg')
  }, {
        "url": "https://www.submarinecablemap.com",
        "title": "Submarine Cable Map",
        "icon": require('./assets/img/icons/submarinecablemap.svg')
  }, {
      "url": "https://countrycode.org",
      "title": "Country Codes, Phone Codes, Dialing Codes, Telephone Codes, ISO Country Codes",
      "icon": require('./assets/img/icons/countrycode.svg')
  }, {
      // 日语熟练程度检查-互联网打字练习
      "url": "https://www.e-typing.ne.jp/roma/check/",
      "title": "腕试しレベルチェック - インターネットでタイピング练习 イータイピング | e-typing ローマ字タイピング",
      "icon": require('./assets/img/icons/e-typing.svg')
  }, {
      // 《说文解字》 是一个致力于中国语言学和文字学中全文检索平台，用户可以根据拼音、部首、构件来查询想要了解的文字，《说文解字》的书名，许慎这样解释：「仓颉之初作书也，盖依类象形，故谓之文。其后形声相益，即谓之字。文者，物象之本;字者，言孳乳而浸多也。」 搜索引擎说文解字
      "url": "http://www.shuowen.org",
      "title": "「说文解字」在线查询 Shuowen.org - 篆书字典 - 「说文解字注」在线查询",
      "icon": require('./assets/img/icons/shuowen.svg')
  }, {
      // 声音搜索引擎
      "url": "https://www.tosound.com",
      "title": "淘声网 - toSound声音搜索引擎 - 免费音效素材资源|视频游戏配乐下载",
      "icon": require('./assets/img/icons/tosound.svg')
  }, {
      // 丁香园用药助手_药品说明书
      "url": "https://drugs.dxy.cn/index.htm",
      "title": "用药助手",
      "icon": require('./assets/img/icons/drugs-dxy.svg')
  }, {
      "url": "https://www.bookmarkearth.com",
      "title": "书签地球-中国首家浏览器书签共享平台",
      "icon": require('./assets/img/icons/bookmarkearth.svg')
  }, {
      // 在线魔方解密网站，只需要把你的魔方颜色输入进去，就能自动获得解法
      "url": "https://rubiks-cube-solver.com",
      "title": "Rubik's Cube Solver",
      "icon": require('./assets/img/icons/rubiks-cube-solver.svg')
  }, {
      // 日本折纸模拟器
      "url": "https://origamisimulator.org",
      "title": "Origami Simulator",
      "icon": require('./assets/img/icons/origamisimulator.svg')
  }, {
      // 在方格纸生成界面上，有包括笔记纸、方格纸、网格纸、画稿纸、乐谱纸、康奈尔笔记等 17 种类型的笔记纸可供选择。 选择好类型后，下面还能对笔记纸进行自定义调整。
      "url": "https://www.mygraphpaper.com",
      "title": "My Graph Paper",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      // 方格纸生成器，支持自定义方格大小和线条粗细 纸张大小 pdf导出下载
      "url": "https://incompetech.com/graphpaper/lite/",
      "title": "Free Online Graph Paper / Simple Grid",
      "icon": require('./assets/img/icons/graphpaper.svg')
  }, {
      "url": "https://xiezuocat.com",
      "title": "秘塔写作猫",
      "icon": require('./assets/img/icons/xiezuocat.svg')
  }, {
      // 秒懂101個台灣人必知的垃圾
      "url": "https://recycle.rethinktw.org",
      "title": "回收大百科",
      "icon": require('./assets/img/icons/recycle-rethinktw.svg')
  }, {
      "url": "https://twdrivingtest.com",
      "title": "台湾考驾照",
      "icon": require('./assets/img/icons/twdrivingtest.svg')
  }, {
      // 轉動地球，免費線上收聽全世界廣播電台頻道
      "url": "http://radio.garden",
      "title": "Radio Garden",
      "icon": require('./assets/img/icons/radio-garden.svg')
  }, {
      // 查找将npm软件包添加到软件包中的成本
      "url": "https://bundlephobia.com",
      "title": "Bundlephobia | Size of NPM dependencies",
      "icon": require('./assets/img/icons/bundlephobia.svg')
  }, {
      "url": "https://archive.is",
      "title": "Webpage archive",
      "icon": require('./assets/img/icons/archive.svg')
  }, {
      "url": "https://http3check.net",
      "title": "HTTP/3 Check",
      "icon": require('./assets/img/icons/http3check.svg')
  }, {
      "url": "https://www.socpk.com",
      "title": "移动芯片性能排行榜",
      "icon": require('./assets/img/icons/socpk.svg')
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
      // 这个网站可以下载一些高品质艺术品图片，汇集了大都会博物馆 、耶鲁大学美术馆、盖蒂博物馆、波士顿公共图书馆、维也纳博物馆等知名机构发布的藏品图片，点击即可直接下载，速度一般，不过查找起来方便快捷
      "url": "https://artvee.com",
      "title": "Artvee",
      "icon": require('./assets/img/icons/artvee.svg')
  }, {
  	  // 复古插图 分享网站，可以下载站长搜集的各类公共版权书籍/报刊中的美丽插图，但有些链接也是会转到购买印刷品的页面上，那些图直接右键另存到本地即可，图片质量是一样的
      "url": "https://freevintageillustrations.com",
      "title": "Free Vintage Illustrations | Free full-color vintage illustrations in the public domain! Curated from postcards, books, ads, and more antique media from the 19th to early 20th-century.",
      "icon": require('./assets/img/icons/freevintageillustrations.svg')
  }, {
      "url": "https://unsplash.com",
      "title": "Unsplash",
      "icon": require('./assets/img/icons/unsplash.svg')
  }, {
      "url": "https://500px.com",
      "title": "500px",
      "icon": require('./assets/img/icons/500.svg')
  }, {
      // 是一个由AI智能分类的无版权图片 分享网站，为了获得更好的搜索结果，该网站中的每张照片都是手动命名，并且该团队还开发了一个智能AI神经网络来对每张招聘进行美学评分，只有评分最高的图片才会在搜索中展示。
      "url": "https://www.pickpik.com",
      "title": "PickPik - Beautiful Royalty-Free Photos Sorted By AI",
      "icon": require('./assets/img/icons/pickpik.svg')
  }, {
      // 免费高质量图库 Skitterphoto，所有图片都是摄影师亲自拍摄上传的，可自由使用
      "url": "https://skitterphoto.com",
      "title": "Skitterphoto: a place to find, show and share public domain images.",
      "icon": require('./assets/img/icons/skitterphoto.svg')
  }, {
      // 他们家的壁纸质量都蛮高的，每天自动换的壁纸经常有惊喜的感觉，windows 安卓上有客户端，可下载壁纸
      "url": "https://backiee.com",
      "title": "backiee - Free Ultra HD wallpaper platform",
      "icon": require('./assets/img/icons/backiee.svg')
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
      "url": "https://wallhaven.cc",
      "title": "Awesome Wallpapers - wallhaven.cc",
      "icon": require('./assets/img/icons/wallhaven.svg')
  }, {
      "url": "https://wall.alphacoders.com",
      "title": "Wallpaper Abyss - HD Wallpapers, Background Images",
      "icon": require('./assets/img/icons/wallalphacoders.svg')
  }, {
      "url": "http://getwallpapers.com",
      "title": "Get the Best HD Wallpapers and Background pictures",
      "icon": require('./assets/img/icons/getwallpapers.svg')
  }, {
      "url": "https://wallpapersden.com",
      "title": "HD Wallpapers, 4K and 8K Wallpapers, Desktop and Mobile Backgrounds",
      "icon": require('./assets/img/icons/wallpapersden.svg')
  }, {
      "url": "https://www.freepik.com",
      "title": "Freepik | Graphic Resources for everyone",
      "icon": require('./assets/img/icons/freepik.svg')
  }, {
  		// 免费的公共版权矢量图形下载网站，6万多笔素材 ，标签丰富，点击绿色的 download 直接下载
      "url": "https://publicdomainvectors.org",
      "title": "Royalty-free vector clip art, svg files and graphics | Public domain vectors",
      "icon": require('./assets/img/icons/publicdomainvectors.svg')
  }, {
      "url": "https://best-wallpaper.net",
      "title": "Best Wallpaper | Free and Best High Quality 2K 4K 5K 8K HD UHD Desktop Wallpapers & iPhone 11 Pro XS Max XR 8 7 6 Plus Wallpapers.",
      "icon": require('./assets/img/icons/best-wallpaper.svg')
  }, {
      // 免费可商用的高清视频素材网站 Mixkit 视频质量高，类型包含商业科技、动画、大自然、户外和交通工具等等。将鼠标放在缩略图上就可以预览视频的效果，也可以选择全屏展示或直接点击右下角进行下载。网站除了视频素材，还有Pr模板，Jazz、Hip-Hop等风格的音乐素材提供，无论商业或非商业用途皆可自由使用
      "url": "https://mixkit.co",
      "title": "Mixkit - Awesome free assets for your next video project",
      "icon": require('./assets/img/icons/mixkit.svg')
  }, {
      // 徕卡旗下网站 既有全球顶级摄影作品展示，又可在线浏览徕卡旗下的摄影杂志。比较小众，作品质量非常高
      "url": "https://beta.1x.com",
      "title": "1x. Photographers that make you feel.",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      "url": "https://www.obzhi.com",
      "title": "乌云高清壁纸站 | 每日分享美丽壁纸",
      "icon": require('./assets/img/icons/obzhi.svg')
  }, {
      "url": "https://www.sigoo.com",
      "title": "极像素-超高像素看世界",
      "icon": require('./assets/img/icons/sigoo.svg')
  }, {
      // 可以免费下载。 名画挺多，可以拿来作插画、配图、自用等等
      "url": "https://www.nbfox.com",
      "title": "麦田艺术 - 收尽世界名画，无水印高清油画免费下载",
      "icon": require('./assets/img/icons/nbfox.svg')
  }, {
      // 可以免费下载。 名画挺多，可以拿来作插画、配图、自用等等
      "url": "https://gallerix.asia",
      "title": "绘画和绘画 – 加勒里克斯在线博物馆",
      "icon": require('./assets/img/icons/gallerix.svg')
  }, {
      // 日本浮世绘 风俗画检索库是由John Resig创办，一个风俗画狂热爱好者，他通过各种方式寻找了很多的类似印花品，收集起来展示为世人
      "url": "https://ukiyo-e.org",
      "title": "Ukiyo-e Search | Japanese Woodblock Print Search",
      "icon": require('./assets/img/icons/ukiyo-e.svg')
  }, {
      // 梵高作品、手稿资源站：这里有最全的梵高作品资源、目录、年表
      "url": "http://www.vggallery.com/index.html",
      "title": "The Vincent van Gogh Gallery",
      "icon": require('./assets/img/icons/default.svg')
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
      "url": "http://www.ex-machina.fr/index.php",
      "title": "ExMachina | Gears and craft | Site personnel de Thibault Simar, graphiste 2D/3D",
      "icon": require('./assets/img/icons/ex-machina.svg')
  }, {
      "url": "https://hellogithub.com",
      "title": "HelloGitHub 分享 GitHub 上入门级、有趣的开源项目",
      "icon": require('./assets/img/icons/hellogithub.svg')
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
      "url": "https://haohailong.net",
      "title": "郝海龙",
      "icon": require('./assets/img/icons/haohailong.svg')
  }, {
      "url": "https://linmi.cc",
      "title": "Linmi - 探索未知，迭代新知，沉淀认知。",
      "icon": require('./assets/img/icons/linmi.svg')
  }, {
      "url": "https://nojimikiko.jp/en",
      "title": "MIKIKO NOJI",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      "url": "https://hiwannz.com",
      "title": "见字如面 - 抽离自我，冷眼旁观",
      "icon": require('./assets/img/icons/hiwannz.svg')
  }, {
      "url": "https://codechina.org",
      "title": "Tinyfool的个人网站",
      "icon": require('./assets/img/icons/codechina.svg')
  }, {
      "url": "https://www.runningcheese.com",
      "title": "奔跑中的奶酪",
      "icon": require('./assets/img/icons/runningcheese.svg')
  }, {
      "url": "https://yufan.me",
      "title": "且听书吟 - 诗与梦想的远方",
      "icon": require('./assets/img/icons/yufan.svg')
  }, {
      "url": "https://netflixtechblog.com",
      "title": "Netflix TechBlog",
      "icon": require('./assets/img/icons/netflixtechblog.svg')
  }, {
      // ECMA 技术委员会成员，开发设计过各种编程语言，妥妥的技术大佬，也是 Stack Overflow 排名前五十的用户，写了超多回答。
      "url": "https://ericlippert.com",
      "title": "Eric Lippert's blog",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      // 缓存数据库 Redis 的创始人的博客。
      "url": "http://antirez.com",
      "title": "<antirez>",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      // EA 的游戏开发工程师，生活很丰富的一个人，搞开发、写书、玩摄影、混乐队，这些他都干过。
      "url": "http://journal.stuffwithstuff.com",
      "title": "Bob Nystrom",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      // 一个很简洁的个人博客，研究计算机如何工作的，经常会针对一个问题长篇大论地深挖，也会经常分享一些关于 Rust 的东西。
      "url": "https://fasterthanli.me",
      "title": "Amos",
      "icon": require('./assets/img/icons/default.svg')
  }, {
      // 前端工程师的博客，讲了很多 CSS 的知识，有一定的设计师功底。
      "url": "https://www.joshwcomeau.com",
      "title": "Josh W Comeau",
      "icon": require('./assets/img/icons/joshwcomeau.svg')
  }, {
      // 分享计算机知识，文章很多，涉及的方面也非常广泛，也会分享一些很硬的东西，比如说内核，数据库等。
      "url": "https://jvns.ca",
      "title": "Julia Evans",
      "icon": require('./assets/img/icons/jvns.svg')
  }, {
      "url": "https://io-oi.me",
      "title": "reuixiy",
      "icon": require('./assets/img/icons/io-oi.svg')
  }, {
      "url": "https://www.ruanyifeng.com/blog",
      "title": "阮一峰的网络日志",
      "icon": require('./assets/img/icons/ruanyifeng.svg')
  }

];

// console.log(Store.fetch_site().length)
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
