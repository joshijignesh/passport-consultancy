<?php

namespace App\DataTables;

use App\PoliceStation;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class PoliceStationsDataTable extends DataTable
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
            ->addColumn('actions', function(PoliceStation $police){ 
                $actionButtons = "<div>"; 
                $actionButtons .= "<a class='btn btn-outline-primary ml-2' href=".route('admin.stations.edit', $police->id) .">Edit</a>";
                $actionButtons .= "<form class='d-inline-block ml-2' id='deleteForm' action='". route('admin.stations.destroy', $police->id)  ."' method='POST'>";
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
     * @param \App\PoliceStation $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(PoliceStation $model)
    {
        if($this->city_id){
            return PoliceStation::where('city_id', $this->city_id);
        }else{
            return $model->newQuery();
        }
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId('policestations-table')
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
            Column::make('name'),
            Column::make('actions') 
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'PoliceStations_' . date('YmdHis');
    }
}
