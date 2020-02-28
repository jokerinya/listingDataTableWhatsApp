$(function() {
  $('#dataTable').DataTable({
    pageLength: 10,
    paging: true,
    lengthChange: true,
    searching: true,
    ordering: true,
    info: true,
    autoWidth: false
  });
});
