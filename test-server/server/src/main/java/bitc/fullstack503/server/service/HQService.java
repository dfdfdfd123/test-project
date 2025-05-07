package bitc.fullstack503.server.service;

import bitc.fullstack503.server.dto.*;

import java.util.List;

public interface HQService {

//    미결제 리스트
    List<UnpaidListDTO> getOrderItemInfoList();

//    발주 내역
    List<OrderListDTO> getOrderList();

//    결제나 반려된 것
    List<FindPaymentDTO> getFindPaymentList();

//    조회 결과
    List<SearchDTO> getFilteredOrders(SearchDTO dto);

    // 단일 주문 처리
    int updateOrderStatusAndDeny(String orderId, String orderStatus, String orderDeny);

    // 복수 주문 처리
    int updateMultipleOrderStatusAndDeny(List<String> orderIdList, String orderStatus, String orderDeny);


//    List<TestDTO> getTestList();
}
