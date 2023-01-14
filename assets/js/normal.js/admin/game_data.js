/* Encode File name script.az5t8ji.js */

function submitdata(id) {
    $("#submitdata"+id).click();
  }
      
/* AddData script */
$("#addDatanew").submit(function(adddata){
adddata.preventDefault();

$.ajax({

    type: "POST",
    url: "plugin/add_new_data.php",
    data: new FormData(this),
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,

    beforeSend: function() {
    swal("กำลังเพิ่มข้อมูล กรุณารอสักครู่...",{button:false,closeOnClickOutside:false,timer:1900,});

    },

    success : function(data){
    setTimeout(function() {
        if (data.code == "200"){
        swal("เพิ่มข้อมูล สำเร็จ!", "ระบบกำลังบันทึกข้อมูล...", "success",{button:false,closeOnClickOutside:false,});
        setTimeout(function(){ window.location.reload();}, 2000);
        } else {
        swal(data.msg ,"" ,"error",{button:{className:'hyper-btn-notoutline-danger',},closeOnClickOutside:false,});
        }
    }, 2000);
    }

});
});


/** Delete Data */
function DelData(id){
var  id = id.value;
swal({
    title: 'ต้องการลบข้อมูลที่ ' + id,
    text: "ถ้าลบแล้วจำไม่สามารถกู้กลับมาได้",
    icon: "warning",
    buttons: {
    confirm : {text:'ลบข้อมูล',className:'hyper-btn-notoutline-danger'},
    cancel : 'ยกเลิก'
    },
    closeOnClickOutside:false,
})
.then((willDelete) => {
    if (willDelete) {
    $.ajax({

        type: "POST",
        url: "plugin/del_data.php",
        dataType: "json",
        data: {id:id},

        beforeSend: function() {
        swal("กำลังลบข้อมูล กรุณารอสักครู่...",{button:false,closeOnClickOutside:false,timer:1900,});

        },

        success : function(data){
        setTimeout(function() {
            if (data.code == "200"){
                swal("ลบข้อมูล สำเร็จ!", "ระบบกำลังพาท่านไป...", "success",{button:false,closeOnClickOutside:false,});
                setTimeout(function(){ window.location.reload();}, 2000);
            } else {
                swal(data.msg ,"" ,"error",{button:{className:'hyper-btn-notoutline-danger',},closeOnClickOutside:false,});
            }
        }, 2000);
        }

    });
    }
});
}



/** Update Data */
function updatedata(id) {

$("#updatedata" + id).submit();

$("#updatedata" + id).submit(function(updateData){
    updateData.preventDefault();

    swal({
    title: 'ต้องการอัพเดทข้อมูลที่ ' + id,
    text: "คุณต้องการอัพเดทข้อมูลใช่หรือไม่",
    icon: "info",
    buttons: {
    confirm : {text:'อัพเดท',className:'hyper-btn-notoutline-success'},
    cancel : 'ยกเลิก'
    },
    closeOnClickOutside:false,
    })
    .then((willDelete) => {
    if (willDelete) {

        var updatedata = new FormData();
        var did = id;
        var username = $('#username'+id).val();
        var password = $('#password'+id).val();
        var cid = $('#card'+id).val();
        var detail = $('#detail'+id).val();
        var gid = $('#gameid'+id).val();

        updatedata.append('data_id',did);
        updatedata.append('username',username);
        updatedata.append('password',password);
        updatedata.append('card_id',cid);
        updatedata.append('detail',detail);
        updatedata.append('gameid',gid);

        $.ajax({

        type: "POST",
        url: "plugin/edit_data.php",
        dataType: "json",
        data: updatedata,
        cache: false,
        contentType: false,
        processData: false,

        beforeSend: function() {
        swal("กำลังอัพเดทข้อมูล กรุณารอสักครู่...",{button:false,closeOnClickOutside:false,timer:1900,});

        },

        success : function(data){
        setTimeout(function() {
            if (data.code == "200"){
            swal("อัพเดทข้อมูล สำเร็จ!", "ระบบกำลังบันทึกข้อมูล...", "success",{button:false,closeOnClickOutside:false,});
            setTimeout(function(){ window.location.reload();}, 2000);
            } else {
            swal(data.msg ,"" ,"error",{button:{className:'hyper-btn-notoutline-danger',},closeOnClickOutside:false,});
            }
        }, 2000);
        }

        });

    }
    });

});
}