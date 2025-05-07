package bitc.fullstack503.server.controller;

import bitc.fullstack503.server.dto.*;
import bitc.fullstack503.server.service.ClientService;
import bitc.fullstack503.server.service.HQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    // 미결제 리스트
    @GetMapping("/order-item-info")
    public List<OrderItemInfoDTO> getOrderItemInfoList() {
        return hqService.getOrderItemInfoList();
    }

//    발주 내역
    @GetMapping("/orderList")
    public List<OrderListDTO> getOrderList() {
        return hqService.getOrderList();
    }

//    결제 확인
    @GetMapping("/payment")
    public List<FindPaymentDTO> getFindPaymentList() {
        return hqService.getFindPaymentList();
    }

//    검색
@PostMapping("/search")
public List<OrderDTO> searchOrders(@RequestBody OrderDTO dto) {
    System.out.println("Received search params: " + dto);
    return hqService.getFilteredOrders(dto);
}

   // 테스트
   @GetMapping("/test")
   public List<TestDTO> getTestList() {
        return hqService.getTestList();
   }
}
