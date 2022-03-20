const pass_char = {
  readme : "README.md",
  before : "./before.md"
}


const app = new Vue({
  el:"#light-novel",
  data:{
    mdtext : "# 初期値",
    mdlink : ""
  },
  created: function(){
    this.get_md_text(pass_char.anime); 
  },
  computed:{
    mdMakeup : function(){
      return marked(this.mdtext);
    }
  },
  methods:{
    get_md_text:function(pass){
      const xhr = new XMLHttpRequest();
      xhr.open('GET', pass);
      xhr.addEventListener('load' , () => {
        this.mdtext = xhr.responseText
      })
      this.mdlink = pass; 
      xhr.send();
    },
    chenge : function(){
      window.scrollTo(0,0);
      if(this.mdlink === pass_char.anime){
        this.get_md_text(pass_char.before); 
      }else{
        this.get_md_text(pass_char.anime);
      }
    }
  }
})
