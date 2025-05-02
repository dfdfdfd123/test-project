package bitc.fullstack503.server.service;

import bitc.fullstack503.server.dto.OrderItemInfoDTO;
import bitc.fullstack503.server.dto.TestDTO;

import java.util.List;

public interface HQService {

    List<OrderItemInfoDTO> getOrderItemInfoList();

    List<TestDTO> getTestList();
}
