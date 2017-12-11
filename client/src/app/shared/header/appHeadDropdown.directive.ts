import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHeadDropdown]'
})
export class AppHeadDropdown {
    @HostBinding('class.open') isDropdownOpen: boolean = false;

    @HostListener('mouseenter') openDropdown(){
        this.isDropdownOpen = true;
    }

    @HostListener('mouseleave') closeDropdown(){
        this.isDropdownOpen = false;
    }
}