package com.openpromt.coffeee.swf2023.openpromtserver.user.controller;

import com.openpromt.coffeee.swf2023.openpromtserver.user.dto.JoinRequestDto;
import com.openpromt.coffeee.swf2023.openpromtserver.user.dto.LoginRequestDto;
import com.openpromt.coffeee.swf2023.openpromtserver.user.dto.LoginResponseDto;
import com.openpromt.coffeee.swf2023.openpromtserver.user.service.UserService;
import com.openpromt.coffeee.swf2023.openpromtserver.util.jaccard.Jaccard;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@Slf4j
@RequiredArgsConstructor
@Api("UserApi : Register, Login")
@RestController
public class UserApiController {

    private final UserService userService;

    @ApiOperation(value = "회원가입", notes = "JoinRequestDto를 입력받아 회원가입")
    @PostMapping("/user/register")
    public ResponseEntity<?> register(@RequestBody JoinRequestDto joinRequestDto) throws JSONException {

        Long userid = userService.join(joinRequestDto);
//        JSONObject json = new JSONObject();
//        json.put("code", 200);
//        json.put("message", "회원가입 성공");
//        json.put("user id", userid);
        return ResponseEntity.ok(userid);
    }

    @ApiOperation(value = "로그인", notes = "LoginRequestDto를 입력받아 로그인")
    @PostMapping("/user/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto requestDto, HttpServletResponse httpServletResponse) throws NoSuchFieldException {
        return new ResponseEntity<LoginResponseDto>(userService.login(requestDto, httpServletResponse), HttpStatus.OK);
    }

//    @GetMapping("/test")
//    public String test(HttpServletRequest request, Principal principal){
//        System.out.println(principal.getName());
//        return request.getCookies()[0].getName();
//    }
//
//    @PostMapping("/test")
//    public Double testJakard(@RequestParam("string1")String string1, @RequestParam("string2")String string2){
//        double similarity = Jaccard.jaccardSimilarity(string1, string2);
//        return similarity;
//    }
}
