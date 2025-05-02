package bitc.fullstack503.server.controller;

import bitc.fullstack503.server.dto.OrderItemInfoDTO;
import bitc.fullstack503.server.dto.TestDTO;
import bitc.fullstack503.server.service.ClientService;
import bitc.fullstack503.server.service.HQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    // 주문/부품/대리점 정보 조회
    @GetMapping("/order-item-info")
    public List<OrderItemInfoDTO> getOrderItemInfoList() {
        return hqService.getOrderItemInfoList();
    }

   // 테스트
   @GetMapping("/test")
   public List<TestDTO> getTestList() {
        return hqService.getTestList();
   }
}
