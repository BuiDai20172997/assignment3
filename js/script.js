function handleSubmit() {
  //lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.querySelector(".email").value.toLocaleLowerCase();

  //lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.querySelector(".error-email");

  //điều kiện để là 1 email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //dùng match() để kiểm tra email vừa nhập có hợp lệ ko
  // console.log("check value email", emailValue);
  const checkEmail = emailValue.match(regex);
  // console.log("email", check);
  //lấy phần chứa thông tin user
  const sectionContent = document.querySelector(".info .section-content");
  console.log("check section", sectionContent);

  //lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  // console.log("hello", element);
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  // console.log("hello", element);
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("view-less")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".timeline");
  if (viewMore.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML = "View less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
