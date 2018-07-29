import React from "react";
import ReactDOM from "react-dom";
import { NotFound } from "./components/RouteComponents";
import { shallow } from "enzyme";



describe("Unit Test Demo", () => {
    
    it("should verify addition of 4 and 2", () => {
        expect(4 + 2).toEqual(6);
    })

    it("verify NotFound Component rendering", () => {
        let d = document.createElement("div");
        ReactDOM.render(<NotFound />, d);
        ReactDOM.unmountComponentAtNode(d);
    })

    it("verify form tag in NotFound Component", () => {
        expect(shallow(<NotFound />).find("form").exists()).toBe(true);
    })

    it("verify email text box in NotFound Component", () => {
        expect(shallow(<NotFound />).find("#email").length).toEqual(1);
    })

    it("verify email state in NotFound Component", () => {
        expect(shallow(<NotFound />).state("email")).toEqual("rabichhatar@gmail.com");
    })
})