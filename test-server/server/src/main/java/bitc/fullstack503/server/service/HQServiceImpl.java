package bitc.fullstack503.server.service;
import bitc.fullstack503.server.dto.*;
import bitc.fullstack503.server.mapper.HQMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HQServiceImpl implements HQService {

    @Autowired
    private HQMapper hqMapper;

    @Override
    public List<OrderItemInfoDTO> getOrderItemInfoList() {
        return hqMapper.findOrderItemsWithBranchAndParts();
    }

    @Override
    public List<TestDTO> getTestList() {
       return hqMapper.findTestsWithBranchAndParts();
    }

    @Override
    public List<FindPaymentDTO> getFindPaymentList() {
        return hqMapper.findPayment();
    }

    @Override
    public List<OrderListDTO> getOrderList() {
        return hqMapper.orderList();
    }

    @Override
    public List<OrderDTO> getFilteredOrders(OrderDTO dto) {
        return hqMapper.selectOrderList(dto);
    }
}
