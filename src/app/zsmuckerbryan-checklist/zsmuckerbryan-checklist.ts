import { Component, signal, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import  { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zsmuckerbryan-checklist',
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './zsmuckerbryan-checklist.html',
  styleUrl: './zsmuckerbryan-checklist.css',
})
export class ZsmuckerbryanChecklist {
 // tasks for the checklist
 protected readonly pizzaTasks = signal([
  {id:1, name: 'Roll Out The Dough', completed: false},
  {id:2, name: 'Apply Sauce', completed: false},
  {id:3, name: 'Sprinkle Cheese', completed: false},
  {id:4, name: 'Apply Toppings', completed: false},
  {id:5, name: 'Bake at 425°F', completed: false}
 ]);

protected readonly total = computed(() => {
  const tasks = this.pizzaTasks();
  if (tasks.length === 0) return 0;

  // 1. Filter: Keep only the completed ones
  // 2. Reduce: Start at 0, add 1 for every item that made it through the filter
  const completedCount = tasks
    .filter(task => task.completed) 
    .reduce((acc) => acc + 1, 0);

  // 3. Math: (Part / Whole) * 100
  return Math.round((completedCount / tasks.length) * 100);
});

protected readonly toggleTask = (id: number) => this.pizzaTasks.update(
  previousTasks => previousTasks.map(
    task => task.id === id
      ? {
        ...task,
        completed: !task.completed
      }
      : task
  )
);

protected readonly checkAll = () => this.pizzaTasks.update(
    currentTasks => currentTasks.map(
      task => ({
        ...task,
        completed: true,
      })
    )
  );

  protected readonly unCheckAll = () => this.pizzaTasks.update(
    currentTasks => currentTasks.map(
      task => ({
        ...task,
        completed: false,
      })
    )
  );

}


