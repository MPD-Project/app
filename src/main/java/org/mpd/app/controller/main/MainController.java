package org.mpd.app.controller.main;

import org.mpd.app.global.GlobalUrl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

    @GetMapping( GlobalUrl.MAIN_URI)
    public ModelAndView getMain() {
        return new ModelAndView("index");
    }

}
