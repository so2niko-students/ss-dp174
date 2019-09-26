import { of } from 'rxjs';

of(1,2,3,4,5).subscribe((value) => console.log('notified', value));