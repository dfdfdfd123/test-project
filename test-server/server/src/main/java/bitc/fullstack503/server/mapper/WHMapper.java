package bitc.fullstack503.server.mapper;

import bitc.fullstack503.server.dto.WHDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface WHMapper {

    //    물류센터 재고조회
//    List<WHDTO> selectWHStock();

    // 물류센터 입고조회
//    List<WHDTO> selectWHComeIn();


    List<WHDTO> selectWHStock(String warehouseId);

    // 물류센터 입고조회
    List<WHDTO> selectWHComeIn(String warehouseId);

    //    재고관리 조회
    List<WHDTO> selectWHManage(String userId);


    void updateOrderStatus(int orderItemId, String orderItemStatus);
}
