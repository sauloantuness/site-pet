/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Idade:</td>'+
            '<td>'+d.fields.Q2+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Egresso de escola:</td>'+
            '<td>'+ d.fields.Q3 +'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Atividades Acadêmicas:</td>'+
            '<td>'+ d.fields.Q4.split(',').reduce(function(previousValue, currentValue){ return previousValue + ", " +  currentValue; }) +'</td>'+
        '</tr>'+
    '</table>';

    console.log(d.fields.Q4)
    console.log(typeof(d.fields.Q4))
}
 
$(document).ready(function() {
    var table = $('.datatables').DataTable( {
        "processing": true,
             "ajax": {
                 "processing": true,
                 "url": "/interpet/inscritos.json",
                 "dataSrc": ""
             },
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "fields.Q1" },
            { "data": "fields.Q6" },
        ],
        "order": [[1, 'asc']]
    } );
     
    // Add event listener for opening and closing details
    $('.datatables tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );
