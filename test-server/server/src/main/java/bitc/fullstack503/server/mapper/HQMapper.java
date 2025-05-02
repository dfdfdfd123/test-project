package bitc.fullstack503.server.mapper;
import bitc.fullstack503.server.dto.OrderItemInfoDTO;
import bitc.fullstack503.server.dto.TestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HQMapper {

    List<OrderItemInfoDTO> findOrderItemsWithBranchAndParts();

    List<TestDTO> findTestsWithBranchAndParts();
}
