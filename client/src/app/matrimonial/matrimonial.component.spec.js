"use strict";
var testing_1 = require("@angular/core/testing");
var matrimonial_component_1 = require("./matrimonial.component");
describe('MatrimonialComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [matrimonial_component_1.MatrimonialComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(matrimonial_component_1.MatrimonialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=matrimonial.component.spec.js.map