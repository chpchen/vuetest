<template>
  <div class="testdiv">
    <hr>
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
        key: 'value'
      }
    },
    computed: {
      name () {
        return this.data
      }
    },
  }
</script>

<style scoped>


  blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, li, ol, p, table, td, textarea, th, ul {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  div {

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
    width: 600px;
    margin: 0 auto;
  }

  .testdiv .content {
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
</style>
