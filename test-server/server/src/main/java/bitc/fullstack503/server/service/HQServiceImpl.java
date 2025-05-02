package bitc.fullstack503.server.service;
import bitc.fullstack503.server.dto.OrderItemInfoDTO;
import bitc.fullstack503.server.dto.TestDTO;
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
}
