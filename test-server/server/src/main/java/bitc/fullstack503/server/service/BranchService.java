package bitc.fullstack503.server.service;

import bitc.fullstack503.server.dto.OrderDTO;
import bitc.fullstack503.server.dto.PartDTO;

import java.util.List;

public interface BranchService {
    // 대리점 주문 목록 조회
    List<OrderDTO> getOrdersByBranch(String branchId, String orderId, String startDate, String endDate);

    List<PartDTO> getPartsByOrderId(String orderId);
}
