const addBtn = $('.add-task');

addBtn.on("click", function () {
    var tasker = $(this).parents();
    const name = $('#taskName').val();
    const desc = $('#taskDesc').val();
    console.log(name, desc);
    const taskCon = $(".displayTask")

    taskCon.append(`<div class="card">
    <div class="card-header">
    <span class="taskName">${name}</span>
    <button type="button" class="btn btn-danger btn-sm remTask me-5" onclick=>Delete</button>
    <button type="button" class="btn btn-success btn-sm doneTask" onclick=>DONE</button>
    </div>
    <div class="card-body">
    <p class="">${desc}</p>
    </div>
    </div> `);

});
    

// $("displayTask").on("click", "remTask", function (){
//      $(this).parents(".card").remove
//     });
//     $(".displayTask").on("click", "doneTask", function (){
//      $(this).parents(".card").addClass("done");
// });


