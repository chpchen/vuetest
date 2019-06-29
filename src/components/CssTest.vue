<template>
  <div class="testdiv">
    <!--热门城市-->
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link  tag="li" v-for="item in hotcitys" :to="'/city/' + item.id" :key="item.id">
          {{item.name}}
        </router-link>
      </ul>
    </section>
    <!--所有城市，按字母排序-->
    <section class="group_city_container">
      <ul class="letter_classify" style="background: #eeeeee">
        <li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
          <h4 class="city_title" style="background: white">{{key}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear" style="background: white">
            <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
              {{item.name}}
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
    <div>
      <h2 style="display: inline">789779978</h2>
      <h2 style="display: inline">klakl;dk;sk;lsd</h2>

    </div>
    <div class="testdiv content">
      新华社北京6月17日电
      <p> 新华社北京6月17日电
        中共中央对外联络部发言人胡兆明17日在北京宣布：<span style="display: block;"> 应朝鲜劳动党委员长、</span>朝鲜民主主义人民共和国国务委员会委员长金正恩邀请，I love you dear
        中共中央总书记、中华人民共和国主席习近平将于6月20日至21日对朝鲜民主主义人民共和国进行国事访问。大写:CHINA
        小写：china
      </p>
    </div>
    <div class="shadow"> 中共中央总书记、中华人民共和国主席习近平将于6月20日至21日对朝鲜民主主义人民共和国进行国事访问。大写:CHINA</div>
    <a href="javascript:;">百度</a>
    <fieldset style="border-color:#42b983; padding:20px">
      <legend style="margin-left: 30px">西瓜的属性：</legend>
      产地：<input type="text"><br/>
      重量：<input type="text"><br/>
      品种：<input type="search"><br/>
    </fieldset>

    <table border="1">
      <colgroup span="2" class="maincolumns"></colgroup>
      <colgorup span="1" class="subcolumns"></colgorup>
      <caption>这是表格标题</caption>

      <tbody v-for="index in 3">
      <td style="text-align: center">aaaa</td>
      <td>bbbbb</td>
      <td>cccccc</td>
      </tbody>
      <tfoot>
      <td>ddssds</td>
      <td>daeqtwet</td>
      <td>daeqtwet</td>
      </tfoot>

      <thead>
      <th>111</th>
      <th>2222</th>
      <th>3333</th>
      </thead>

    </table>
  </div>
</template>

<script>
  export default {
    name: 'CssTest',
    data () {
      return {
        key: 'value',
        hotcitys:[],
        groupcity: {},   //所有城市列表
      }
    },
    created(){
      //请求热门城市
      this.$axios.get('../static/hotcity.json').then(response => {
        // console.log(response)
        // console.log("你好")
        // 注意这里是data
        if (response.data.status == '0001') {
          console.log("取到数据了")
          this.hotcitys = response.data.datas
        } else {
          console.log("状态不对")
        }
      }).catch(error => {
        console.log("出错了；；；；；")
        console.log(error)

      }),
        //请求所有城市
        this.$axios.get('../static/groupcity.json').then(response => {
          // 注意这里是data
            this.groupcity = response.data;
        }).catch(error => {
          console.log("出错了；；；；；")
          console.log(error)

        })
    },
    computed: {
      //将获取的数据按照A-Z字母开头排序
      sortgroupcity(){
        let sortobj = {};
         console.log(typeof  this.groupcity);
        for (let i = 65; i <= 90; i++) {
           // console.log(String.fromCharCode(i));
            // console.log(this.groupcity);
          if (this.groupcity[String.fromCharCode(i)]) {
             // console.log(String.fromCharCode(i));
            sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
          }
        }
         console.log('排序了');
         console.log(JSON.stringify(sortobj));
         //取对象前十个
        return sortobj
      }
    },
  }
</script>

<style lang="less" scoped>


  blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, li, ol, p, table, td, textarea, th, ul {
  margin: 0;
  padding: 0;
  }

  a {
    text-decoration: none;
  }

div{
}
  /*横线*/
  hr {
    background-color: #dddddd;
    height: 0.5px;
    margin-left: 20px;
    margin-right: 20px;
  }

  h2 {
    font-weight: bold;
    font-size: 20px;
    color: blue;

    background-color: #e5ff5c;
    background-image: none;
    background-repeat: no-repeat;

  }

  p {
    /*首行缩进*/
    text-indent: 2em;
  }

  .clear:after{
    content: '';
    display: block;
    clear: both;
  }

  .clear{
    zoom:1;
  }
  table {
    caption-side: revert;
  }

  .shadow {
    margin-top: 20px;
    box-shadow: 4px 4px 5px 0px brown;
  }

  .maincolumns {
    background-color: aquamarine;
  }

  .subcolumns {
    background-color: blue;
  }

  .testdiv {
    width: 100%;
    margin: 0 auto;
    .hot_city_container{
      background-color: #fff;
      margin-bottom: 0.4rem;
    }
    .city_title{
      color: #666;
      font-weight: 400;
      text-indent: 0.45rem;
      border-top: 2px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      font-size: 2rem;
      font-family: "Helvetica Neue";0.475rem, #999
      span{
        font-size: 0.475rem;
        color: #999;
      }

    }
    .citylistul{
      margin-bottom: 20px;
      li{
        float: left;
        text-align: center;
        color: #4da6ff;
        border-bottom: 0.025rem solid #dddddd;
        border-right: 0.025rem solid #dddddd;
        width: 25%;
        height: 2.75rem;
        line-height:2.75rem ;
        font-family: "Microsoft YaHei";
        font-size: 0.9rem;
      }
      //四的倍数时li元素没有右边框
      li:nth-of-type(4n){
        border-right: none;
      }
    }

    .letter_classify_li{
      margin-bottom: 1.4rem;
      background-color: #fff;
      border-bottom: 1px solid #dddddd;
      .groupcity_name_container{
        li{
          color: #666;
        }
      }
    }
    .ellipsis{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .content {
      color: #42b983;
      letter-spacing: 2px;
      word-spacing: 5px;
      text-align: justify;
      text-decoration: none;
      text-transform: capitalize;
      word-spacing: revert;
      text-shadow: #57aaaa 10px 10px 10px;
      font-family: inherit;
      font-style: italic;
      outline-color: brown;
      outline-style: dashed;
      /*outline: blue 18px dashed;*/
    }
  }

</style>
