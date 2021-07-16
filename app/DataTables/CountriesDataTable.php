<?php

namespace App\DataTables;

use App\Country; 
use Yajra\DataTables\Html\Column; 
use Yajra\DataTables\Services\DataTable;

class CountriesDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    { 

        return datatables()
            ->eloquent($query)
            ->addColumn('actions', function(Country $country){ 
                $actionButtons = "<div>";
                $actionButtons .= "<a class='btn btn-outline-primary' href=".route('admin.countries.edit', $country->id) .">Edit</a>";
                $actionButtons .= "<form class='d-inline-block ml-2' id='deleteForm' action='". route('admin.countries.destroy', $country->id)  ."' method='POST'>";
                $actionButtons .= "<input type='hidden' name='_token' value='". csrf_token() ."'>";
                $actionButtons .= "<input type='hidden' name='_method' value='DELETE'>";
                $actionButtons .= "<button type='submit' class='btn btn-outline-danger'>Delete</button>";
                $actionButtons .= "</form>";
                $actionButtons .= "</div>";
                return $actionButtons ;
            })
            ->rawColumns(['actions']);

    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Country $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Country $model)
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId('countries-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->dom('Bfrtip');
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('id'), 
            Column::make('sortname'),
            Column::make('name'),
            Column::make('actions')
            // Column::make('action') 
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Countries_' . date('YmdHis');
    }
}
