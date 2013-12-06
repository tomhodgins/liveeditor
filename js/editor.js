$(document).ready(function(){
  onload=(document).onkeyup=function(){
    (document.getElementById("preview").contentWindow.document).write(
      html.value+"<style>"+css.value+"<\/style><script>"+js.value+"<\/script>"
    );
    (document.getElementById("preview").contentWindow.document).close()
  };
});
