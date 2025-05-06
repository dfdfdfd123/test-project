package bitc.fullstack503.server.service;

import bitc.fullstack503.server.dto.*;

import java.util.List;

public interface HQService {

    List<OrderItemInfoDTO> getOrderItemInfoList();

    List<TestDTO> getTestList();

    List<FindPaymentDTO> getFindPaymentList();

    List<OrderListDTO> getOrderList();

    List<OrderDTO> getFilteredOrders(OrderDTO dto);
}
