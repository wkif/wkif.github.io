function switchComment() {
  const t =
      "切换为Gitalk" === $("#switch-comment").attr("title")
        ? "切换为Valine"
        : "切换为Gitalk",
    o = $("#switch-comment>i");
  "none" === $("#gitalk-container").css("display")
    ? $("#vcomment").slideUp("normal", () => {
        $("#gitalk-container").slideDown("normal", () => {
          $("#switch-comment").attr("title", t),
            o.hasClass("fa-toggle-off")
              ? o.removeClass("fa-toggle-off").addClass("fa-toggle-on")
              : o.removeClass("fa-toggle-on").addClass("fa-toggle-off");
        });
      })
    : $("#gitalk-container").slideUp("normal", () => {
        $("#vcomment").slideDown("normal", () => {
          $("#switch-comment").attr("title", t),
            o.hasClass("fa-toggle-off")
              ? o.removeClass("fa-toggle-off").addClass("fa-toggle-on")
              : o.removeClass("fa-toggle-on").addClass("fa-toggle-off");
        });
      });
}
var commentElement = document.getElementsByClassName("comment_headling")[0];
if (commentElement != undefined) {
  commentElement.innerHTML +=
    '<a id="switch-comment" href="javascript:void(0);" title="切换为Gitalk" target="_self"><i class="fa fas fa-toggle-off" aria-hidden="true"></i></a>';
  document.getElementById("gitalk-container").style.display = "none";
}
$("#switch-comment").click(function () {
  return switchComment(), !1;
});