package bitc.fullstack503.server.controller;

import bitc.fullstack503.server.service.ClientService;
import bitc.fullstack503.server.service.HQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/HQMain")
@RestController
public class WebController {

    @Autowired
    private HQService hqService;

    @Autowired
    private ClientService clientService;

    @GetMapping("")
    public String test() {
        return "test";
    }
}
