import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnDestroy {
    activeTab = -1;
    searchText = '';
    currentTabData = null;
    tabsdata = [
        {
            name: 'Tab 1',
            data: [
                {
                    name: 'Lorem100',
                    column2Options: ['Max', 'Min', 'Average'],
                    column3Options: ['Max', 'Min', 'Average'],
                    isChecked: false
                },
                {
                    name: 'Lorem200',
                    column2Options: ['Max', 'Min', 'Average'],
                    column3Options: ['Max', 'Min', 'Average'],
                    isChecked: false
                },
                {
                    name: 'Lorem300',
                    column2Options: ['Max', 'Min', 'Average'],
                    column3Options: ['Max', 'Min', 'Average'],
                    isChecked: false
                },
                {
                    name: 'Lorem400',
                    column2Options: ['Max', 'Min', 'Average'],
                    column3Options: ['Max', 'Min', 'Average'],
                    isChecked: false
                },
                {
                    name: 'Lorem400',
                    column2Options: ['Max', 'Min', 'Average'],
                    column3Options: ['Max', 'Min', 'Average'],
                    isChecked: false
                }
            ]
        },
        {
            name: 'Tab 2',
            data: []
        },
        {
            name: 'Tab 3',
            data: []
        }
    ];
    dragId = 'tableDataDrag';
    dragAllowedElements = [];
    rowItems = [];
    subscriptions: Subscription = new Subscription();
    isAllSelected = false;
    constructor(private dragulaService: DragulaService) {

    }
    ngOnInit() {
        this.setActiveTab(0);
        this.dragulaService.createGroup(this.dragId, {
            revertOnSpill: true,
            moves: (el, container, handle) => {
                return handle.classList.contains('drag-handle');
            },
            accepts: (el, target, source, sibling) => {
                // To avoid dragging from right to left container
                if (target.id === 'leftPane' && source.id === 'tableRows') {
                    console.log(target, source);
                }
                return target.id !== source.id && (target.id === 'tableRows' && source.id === 'leftPane');
            }
        });
        const dropsub = this.dragulaService.dropModel().subscribe((e) => {
            const dropItem = e.item;
            dropItem.isChecked = false;
            this.rowItems.push(dropItem);
            // const index = this.currentTabData.findIndex((tabdata) => tabdata.name === dropItem.name);
            // if (index > -1) {
            //     this.currentTabData.splice(index,1);
            // }

        });
        this.subscriptions.add(dropsub);
    }

    setActiveTab(index) {
        this.activeTab = index;
        this.currentTabData = this.tabsdata[index].data;
    }

    ngOnDestroy() {
        this.dragulaService.destroy(this.dragId);
        this.subscriptions.unsubscribe();
    }

    onSelectAll(isChecked) {
        if (this.rowItems.length) {
            this.rowItems.forEach((item) => item.isChecked = isChecked);
        }
    }

    removeSelectedrows() {
        if (this.rowItems.length > 0) {
            let index = 0;
            while (index !== -1) {
                index = this.rowItems.findIndex((item) => item.isChecked);
                if (index > -1) {
                    const deleteItem = this.rowItems.splice(index, 1)[0];
                    deleteItem.isChecked = false;
                    this.currentTabData.push(deleteItem);
                }
            }
        }
    }

    // onTabItmeSelect(isChecked,item)
    // {
    //     if(isChecked)
    //     {
    //         this.dragAllowedElements.push(item);
    //     }
    // }
}
